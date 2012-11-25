var scenario = new Scenario
scenario.set('Example Scenario', 'active')
firstFloor = scenario.addFloor('First Floor', 0);
secondFloor = scenario.addFloor('Second Floor', 1);
thirdFloor = scenario.addFloor('Third Floor', 2);
// firstFloor = scenario.getFloor(0)
// Professor's Office
newRoom = firstFloor.addRoom('5thhall', 'SW 5th & Hall', 0, 0, 0)
newRoom.addWall('E 5th Hall', 'e', 'A-east.jpg')
newRoom.addWall('W 5th Hall', 'w', 'A-west.jpg')
newRoom.addWall('N 5th Hall', 'n', 'A-north.jpg')
newRoom.addWall('S 5th Hall', 's', 'A-south.jpg')
// Hallway 0
newRoom = firstFloor.addRoom('north5th', 'Upper SW 5th & Hall', 0, 1, 0)
newRoom.addWall('E Upper 5th Hall', 'e', 'B-east.jpg')
newRoom.addWall('W Upper 5th Hall', 'w', 'B-west.jpg')
newRoom.addWall('N Upper 5th Hall', 'n', 'B-north.jpg')
newRoom.addWall('S Upper 5th Hall', 's', 'B-south.jpg')
// Hallway 1
newRoom = firstFloor.addRoom('westhall', 'West on Hall', 1, 0, 0)
newRoom.addWall('E West on Hall', 'e', 'C-east.jpg')
newRoom.addWall('W West on Hall', 'w', 'C-west.jpg')
newRoom.addWall('N West on Hall', 'n', 'C-north.jpg')
newRoom.addWall('S West on Hall', 's', 'C-south.jpg')
// Hallway 2
newRoom = firstFloor.addRoom('westhall2', 'West on Hall 2', 2, 0, 0)
newRoom.addWall('E West on Hall 2', 'e', 'D-east.jpg')
newRoom.addWall('W West on Hall 2', 'w', 'D-west.jpg')
newRoom.addWall('N West on Hall 2', 'n', 'D-north.jpg')
newRoom.addWall('S West on Hall 2', 's', 'D-south.jpg')
// Other Office
newRoom = firstFloor.addRoom('SW 4th & Hall', 'SW 4th & Hall', 2, 0, 0)
newRoom.addWall('E 4th Hall', 'e', 'E-east.jpg')
newRoom.addWall('W 4th Hall', 'w', 'E-west.jpg')
newRoom.addWall('N 4th Hall', 'n', 'E-north.jpg')
newRoom.addWall('S 4th Hall', 's', 'E-south.jpg')
// Elevator - first floor
newRoom = firstFloor.addRoom('elevator', 'Elevator', 1, 3, 0)
newRoom.addWall('E Elevator Wall', 'e', 'elev-e.jpg');
newRoom.addWall('W Elevator Wall', 'w', 'elevw.jpg');
newRoom.addWall('N Elevator Wall', 'n', 'elev-n.jpg');
newRoom.addWall('S Elevator Wall', 's', 'elev-s.jpg');
newRoom.addProp('hasStairsUp', true);
newRoom.addProp('exitStairsFacing', 'e');
newRoom.addProp('enterStairsFacing', 'w');
//Elevator - second floor
newRoom = secondFloor.addRoom('elevator', 'Elevator', 1, 3, 1)
newRoom.addWall('E Elevator Wall', 'e', 'elev-e.jpg');
newRoom.addWall('W Elevator Wall', 'w', 'elev-w.jpg');
newRoom.addWall('N Elevator Wall', 'n', 'elev-n.jpg');
newRoom.addWall('S Elevator Wall', 's', 'elev-s.jpg');
newRoom.addProp('hasStairsDown', true);
newRoom.addProp('exitStairsFacing', 'e');
newRoom.addProp('enterStairsFacing', 'w');

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
player.set(0, 0, 0, "n", null)



