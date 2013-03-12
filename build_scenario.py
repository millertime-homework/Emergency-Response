#!/usr/bin/env python

import sys,os,shutil
from argparse import ArgumentParser

""" 

Create a Scenario definition file by combining
the individual room, conversation, and trigger
files found in the directory tree.

scenarios/
    active_shooter/
        floors/
            first_floor/
                rooms/
                    room000/
                    ...
            ...
        conversations/
            prof_bell/
            ...
        triggers/
            getToClass/
            ...
    ...

"""

def help():
    print "Usage:\npython build_scenario.py [-i | --interactive] [-h | --help] [scenario_name]"

def pretty(name):
    return name.replace('_',' ').title()

def check_path(path):
    if not os.path.exists(path):
        print_error("File not found: " + path)

def check_dir(path):
    check_path(path)
    if not os.path.isdir(path):
        print_error("Not a directory: " + path)

def print_error(err):
    print "[Error] " + err
    exit(1)

def validFileName(name):
    return not name.startswith('.') and name.endswith('.js')

def ship(scenario_name, scenario, interactive):
    if interactive:
        request = raw_input("[w]rite, [s]kip > ")
        if request != None:
            request = request.lower()
            if request == 'w':
                f = open(scenario_name+'.js', 'w')
                f.write(scenario)
                f.close()
                request2 = raw_input("View [d]iff, [m]ove into 'js' directory, [s]kip > ")
                if request2 == 'd':
                    os.system("diff {0}.js src/web/js/{0}.js".format(scenario_name))
                    move_it = raw_input("Move? ")
                    if move_it.lower().startswith("y"):
                        path_to_scenario = "src/web/js/%s.js" % scenario_name
                        if os.path.exists(path_to_scenario):
                            if os.path.exists(path_to_scenario+".backup"):
                                os.remove(path_to_scenario+".backup")
                            print "Creating backup: " + path_to_scenario + ".backup"
                            os.rename(path_to_scenario, path_to_scenario+".backup")
                        shutil.move(scenario_name+".js", path_to_scenario)
                    else:
                        return
                elif request2 == 'm':
                    path_to_scenario = "src/web/js/%s.js" % scenario_name
                    if os.path.exists(path_to_scenario):
                        if os.path.exists(path_to_scenario+".backup"):
                            os.remove(path_to_scenario+".backup")
                        print "Creating backup: " + path_to_scenario + ".backup"
                        os.rename(path_to_scenario, path_to_scenario+".backup")
                    shutil.move(scenario_name+".js", "src/web/js/")
                else:
                    return
            else:
                return
    else:
        f = open(scenario_name+'.js', 'w')
        f.write(scenario)
        f.close()
        path_to_scenario = "src/web/js/%s.js" % scenario_name
        if os.path.exists(path_to_scenario):
            if os.path.exists(path_to_scenario+".backup"):
                os.remove(path_to_scenario+".backup")
            os.rename(path_to_scenario, path_to_scenario+".backup")
        shutil.move(scenario_name+".js", path_to_scenario)

def build_scenario(scenario_name, interactive):
    if interactive:
        print "Building %s..." % scenario_name
    path_to_scenario = os.path.join("scenarios",scenario_name)
    check_dir(path_to_scenario)
    scenario = (
        scenario_name + "Def = {\n"
        "    'name': '" + scenario_name + " Scenario',\n"
        "    '_floors': {\n"
        )
    
    # look up each floor in the 'floors' directory
    path_to_floors = os.path.join(path_to_scenario,"floors")
    check_dir(path_to_floors)
    for floor in os.listdir(path_to_floors):
        if scenario.endswith("}"):
            scenario += ",\n"
        scenario += "        '%s': {\n" % pretty(floor)
        path_to_floor = os.path.join(path_to_floors,floor)
        check_dir(path_to_floor)

        # get the z-value for this floor
        path_to_z = os.path.join(path_to_floor,"z.js")
        check_path(path_to_z)
        f = open(path_to_z)
        scenario += (" "*12) + f.read()
        f.close()

        scenario += (" "*12) + "'_rooms': {\n"

        # look up each room in the directory for each floor   
        for room in os.listdir(path_to_floor):
            if not validFileName(room):
                continue
            if room == "z.js":
                continue
            # add comma between rooms
            if scenario.endswith("}\n"):
                scenario = scenario.rstrip("\n")
                scenario += ",\n"
            path_to_room = os.path.join(path_to_floor,room)
            f = open(path_to_room)
            for line in f.readlines():
                scenario += (" "*16) + line
            f.close()
            # in case the room file doesn't end with a newline
            if not scenario.endswith("\n"):
                scenario += "\n"

        # close rooms
        scenario += (" "*12) + "}\n"

        # close floor
        scenario += (" "*8) + "}"

    # close floors
    scenario += "\n    },\n"

    # look up each conversation in the 'conversations' directory
    scenario += "    '_conversations': {\n"
    path_to_conversations = os.path.join(path_to_scenario,"conversations")
    check_dir(path_to_conversations)
    for conversation in os.listdir(path_to_conversations):
        if not validFileName(conversation):
            continue
        # add comma between conversations
        if scenario.endswith("}\n"):
            scenario = scenario.rstrip("\n")
            scenario += ",\n"
        path_to_conversation = os.path.join(path_to_conversations,conversation)
        f = open(path_to_conversation)
        for line in f.readlines():
            scenario += (" "*8) + line
        f.close()
        if not scenario.endswith("\n"):
            scenario += "\n"
    scenario += "    },\n"

    # look up each trigger in the 'triggers' directory
    scenario += "    '_triggers': {\n"
    path_to_triggers = os.path.join(path_to_scenario,"triggers")
    check_dir(path_to_triggers)
    for trigger in os.listdir(path_to_triggers):
        if not validFileName(trigger):
            continue
        # add comma between triggers
        if scenario.endswith("}\n"):
            scenario = scenario.rstrip("\n")
            scenario += ",\n"
        path_to_trigger = os.path.join(path_to_triggers,trigger)
        f = open(path_to_trigger)
        for line in f.readlines():
            scenario += (" "*8) + line
        f.close()
        if not scenario.endswith("\n"):
            scenario += "\n"
    scenario += "    },\n"

    # look up inactive props (and player's starting properties)
    path_to_inactive_props = os.path.join(path_to_scenario,"inactive_props.js")
    check_path(path_to_inactive_props)
    f = open(path_to_inactive_props)
    for line in f.readlines():
        scenario += (" "*4) + line
    f.close()

    # look up annotations
    path_to_annotations = os.path.join(path_to_scenario,"annotations.js")
    check_path(path_to_annotations)
    f = open(path_to_annotations)
    for line in f.readlines():
        scenario += (" "*4) + line
    f.close()

    scenario += "\n}\n"

    ship(scenario_name, scenario, interactive)
def main():
    parser = ArgumentParser(description="Compile scenario files.")
    parser.add_argument('-i', '--interactive', action='store_true', default=False,
                        help='Prompt before replacing files.')
    parser.add_argument('scenario', nargs='?', help='Scenario to build (ActiveShooter/Earthquake).')
    args = parser.parse_args()
    if args.scenario != None:
        # build scenario with given name
        build_scenario(args.scenario, args.interactive)
    else:
        # build all scenarios found in scenarios directory
        for scenario_name in os.listdir("scenarios"):
            build_scenario(scenario_name, args.interactive)

if __name__=="__main__":
    main()