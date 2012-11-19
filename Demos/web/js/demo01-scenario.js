var scenario = new Scenario
scenario.set('Example Scenario', 'active')
firstFloor = scenario.addFloor('First Floor', 0);
secondFloor = scenario.addFloor('Second Floor', 1);
thirdFloor = scenario.addFloor('Third Floor', 2);
// firstFloor = scenario.getFloor(0)
// Professor's Office
newRoom = firstFloor.addRoom('profoff', 'Professor\'s Office', 0, 0, 0)
newRoom.addWall('E Office Wall', 'e', 'profoffice-e.jpg')
newRoom.addWall('W Office Wall', 'w', 'profoffice-w.jpg')
newRoom.addWall('N Office Wall', 'n', 'profoffice-n.jpg')
newRoom.addWall('S Office Wall', 's', 'profoffice-s.jpg')
// Hallway 0
newRoom = firstFloor.addRoom('hall0', 'Hallway-South', 1, 0, 0)
newRoom.addWall('E Hallway-South Wall', 'e', 'hall0-e.jpg')
newRoom.addWall('W Hallway-South Wall', 'w', 'hall0-w.jpg')
newRoom.addWall('N Hallway-South Wall', 'n', 'hall0-n.jpg')
newRoom.addWall('S Hallway-South Wall', 's', 'hall0-s.jpg')
// Hallway 1
newRoom = firstFloor.addRoom('hall1', 'Hallway-Middle', 1, 1, 0)
newRoom.addWall('E Hallway-Middle Wall', 'e', 'hall1-e.jpg')
newRoom.addWall('W Hallway-Middle Wall', 'w', 'hall1-w.jpg')
newRoom.addWall('N Hallway-Middle Wall', 'n', 'hall1-n.jpg')
newRoom.addWall('S Hallway-Middle Wall', 's', 'hall1-s.jpg')
// Hallway 2
newRoom = firstFloor.addRoom('hall2', 'Hallway-Middle', 1, 2, 0)
newRoom.addWall('E Hallway-North Wall', 'e', 'hall2-e.jpg')
newRoom.addWall('W Hallway-North Wall', 'w', 'hall2-w.jpg')
newRoom.addWall('N Hallway-North Wall', 'n', 'hall2-n.jpg')
newRoom.addWall('S Hallway-North Wall', 's', 'hall2-s.jpg')
// Other Office
room = firstFloor.addRoom('miscoff', 'Miscellaneous Office', 2, 2, 0)
room.addWall('E Misc-Office Wall', 'e', 'miscoff-e.jpg')
room.addWall('W Misc-Office Wall', 'w', 'miscoff-w.jpg')
room.addWall('N Misc-Office Wall', 'n', 'miscoff-n.jpg')
room.addWall('S Misc-Office Wall', 's', 'miscoff-s.jpg')