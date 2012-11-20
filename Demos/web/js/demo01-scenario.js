var scenario = new Scenario
scenario.set('Example Scenario', 'active')
firstFloor = scenario.addFloor('First Floor', 0);
secondFloor = scenario.addFloor('Second Floor', 1);
thirdFloor = scenario.addFloor('Third Floor', 2);
// firstFloor = scenario.getFloor(0)
// Professor's Office
newRoom = firstFloor.addRoom('profoff', 'Professor\'s Office', 0, 0, 0)
newRoom.addWall('E Office Wall', 'e', 'A-east.jpg')
newRoom.addWall('W Office Wall', 'w', 'A-west.jpg')
newRoom.addWall('N Office Wall', 'n', 'A-north.jpg')
newRoom.addWall('S Office Wall', 's', 'A-south.jpg')
// Hallway 0
newRoom = firstFloor.addRoom('hall0', 'Hallway-South', 1, 0, 0)
newRoom.addWall('E Hallway-South Wall', 'e', 'B-north.jpg')
newRoom.addWall('W Hallway-South Wall', 'w', 'B-west.jpg')
newRoom.addWall('N Hallway-South Wall', 'n', 'B-north.jpg')
newRoom.addWall('S Hallway-South Wall', 's', 'B-south.jpg')
// Hallway 1
newRoom = firstFloor.addRoom('hall1', 'Hallway-Middle', 1, 1, 0)
newRoom.addWall('E Hallway-Middle Wall', 'e', 'C-east.jpg')
newRoom.addWall('W Hallway-Middle Wall', 'w', 'C-west.jpg')
newRoom.addWall('N Hallway-Middle Wall', 'n', 'C-north.jpg')
newRoom.addWall('S Hallway-Middle Wall', 's', 'C-south.jpg')
// Hallway 2
newRoom = firstFloor.addRoom('hall2', 'Hallway-North', 1, 2, 0)
newRoom.addWall('E Hallway-North Wall', 'e', 'D-east.jpg')
newRoom.addWall('W Hallway-North Wall', 'w', 'D-west.jpg')
newRoom.addWall('N Hallway-North Wall', 'n', 'D-north.jpg')
newRoom.addWall('S Hallway-North Wall', 's', 'D-south.jpg')
// Other Office
newRoom = firstFloor.addRoom('miscoff', 'Miscellaneous Office', 2, 2, 0)
newRoom.addWall('E Misc-Office Wall', 'e', 'E-east.jpg')
newRoom.addWall('W Misc-Office Wall', 'w', 'E-west.jpg')
newRoom.addWall('N Misc-Office Wall', 'n', 'E-north.jpg')
newRoom.addWall('S Misc-Office Wall', 's', 'E-south.jpg')
// Elevator - first floor
newRoom = firstFloor.addRoom('elevator', 'Elevator', 1, 3, 0)
newRoom.addWall('E Elevator Wall', 'e', 'elev-e.jpg');
newRoom.addWall('W Elevator Wall', 'w', 'elevw.jpg');
newRoom.addWall('N Elevator Wall', 'n', 'elev-n.jpg');
newRoom.addWall('S Elevator Wall', 's', 'elev-s.jpg');
//Elevator - second floor
newRoom = secondFloor.addRoom('elevator', 'Elevator', 1, 3, 1)
newRoom.addWall('E Elevator Wall', 'e', 'elev-e.jpg');
newRoom.addWall('W Elevator Wall', 'w', 'elev-w.jpg');
newRoom.addWall('N Elevator Wall', 'n', 'elev-n.jpg');
newRoom.addWall('S Elevator Wall', 's', 'elev-s.jpg');

// 2 Hallway 2
newRoom = secondFloor.addRoom('2hall2', '2nd Floor Hallway-North', 1, 2, 1)
newRoom.addWall('E Hallway-North Wall', 'e', '2hall2-e.jpg')
newRoom.addWall('W Hallway-North Wall', 'w', '2hall2-w.jpg')
newRoom.addWall('N Hallway-North Wall', 'n', '2hall2-n.jpg')
newRoom.addWall('S Hallway-North Wall', 's', '2hall2-s.jpg')
// Penthouse
newRoom = secondFloor.addRoom('pent', 'Penthouse', 1, 1, 1)
newRoom.addWall('E Penthouse Wall', 'e', 'pent-e.jpg')
newRoom.addWall('W Penthouse Wall', 'w', 'pent-w.jpg')
newRoom.addWall('N Penthouse Wall', 'n', 'pent-n.jpg')
newRoom.addWall('S Penthouse Wall', 's', 'pent-s.jpg')

// Player Info
player = new Player
player.set(1, 2, 0, "n", null)



