render.py

Format:
<path_to_blender_exe> -b <path_to_blend_file> -P <path_to_render.py> -- <arg>=<val> <arg>=<val> <arg>=<val>...

Arguments:
render - required
    all_groups
    groups - requires 'groups' argument
    all_cameras
    cameras - requires 'cameras' argument
groups - required if using 'groups' as render value. All camera groups must be named with the prefix "c_"
    <group_name>,<group_name>,...
cameras - required if using 'cameras' as render value. All cameras must be named with the prefix "c_"
    <camera_name>,<camera_name>,...
path
    <path_to_render_output_directory>
rgroups - use render groups. All render groups must be named with "r_"
    true
    false