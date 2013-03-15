-- Used to generate tables for compressing the save file.  Its output was
-- copied into save.js.
module Huffman where

import PriorityQueue
import Data.Map ((!),Map)
import qualified Data.Map as Map
import qualified Data.ByteString as ByteString
import Data.List

data (Real n) => HTree n t = HLeaf n t | HBranch n (HTree n t) (HTree n t) deriving (Show,Eq)

probability (HLeaf n _) = n
probability (HBranch n _ _) = n

probabilities_r m [] = m
probabilities_r m (x:xs) = probabilities_r (Map.insertWith (+) x 1 m) xs
initial_trees l = map (\(x,p) -> HLeaf p x) (Map.toAscList (probabilities_r Map.empty l))
initial_pqueue l = listToPriorityQueue (\x y -> (probability x) < (probability y)) (initial_trees l)

create_code_r q | pisEmpty q = error "Nothing to encode"
                | pisEmpty (pdequeue q) = ppeek q
                | otherwise = let x = ppeek q
                                  y = ppeek (pdequeue q)
                                  q' = pdequeue (pdequeue q)
                              in create_code_r (penqueue q' (HBranch (probability x + probability y) x y))
createCode l = create_code_r (initial_pqueue l)

codeToMap_r :: (Real n) => (Ord t) => [Bool] -> (HTree n t) -> (Map.Map t [Bool])
codeToMap_r sofar (HLeaf n v) = Map.singleton v sofar
codeToMap_r sofar (HBranch n t0 t1) = Map.union (codeToMap_r (sofar++[False]) t0) (codeToMap_r (sofar++[True]) t1)
codeToMap c = codeToMap_r [] c

h_encode code str = foldl (++) [] (map ((codeToMap code)!) str)

representativeSample =
	-- from start of ActiveShooter
	"[2,0,0,\"n\",\"ActiveShooterDef\",{\"inProgress\":{\"pickUpBook\":\"Go pick up your book from the library on the 2nd floor.\"},\"completed\":{},\"failed\":{}},[\"UseDoor\",\"shooterR111\",\"bell-hiding\",\"HidingPlace\",\"doorShadeDown\",\"door-open\",\"door2-open\",\"lock1\",\"lock2\",\"doorShadeDown041\",\"hidingSpot\",\"hidingSpot2\",\"doorHandleDone\",\"lightSwitchDone\",\"hidingStudent1\",\"hidingStudent2\",\"hidingStudent3\",\"shooter220S\"],{},\"on\",[[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[0],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[0],-1],[[1],-1],[[1],-1],[[0],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[0],-1],[[0],-1],[[1],-1],[[1],-1],[[0],-1],[[0],-1],[[0],-1],[[0],-1],[[0],-1],[[0],-1],[[1],-1],[[0],-1],[[1],-1],[[1],-1],[[]],[[1],-1],[[0],-1],[[1],-1],[[0],-1],[[0],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[0],-1],[[0],-1],[[0],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[0],-1],[[1],-1],[[0],-1],[[0],-1],[[1],-1],[[0],-1],[[0],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[0],-1],[[1],-1],[[1],-1],[[0],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[0],-1],[[0],-1],[[1],-1],[[0],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1]]]" ++
	-- from start of Earthquake, after packing go-kit
	"[0,0,2,\"w\",\"EarthquakeDef\",{\"inProgress\":{\"travelToSchool\":\"Exit your room to go to school.\"},\"completed\":{\"packForSchool\":\"Pack your go-kit. Then head to school\"},\"failed\":{}},[\"heavy-on-floor\",\"Movedwire\",\"bridgeDoor\",\"bikeMoved\",\"beam\",\"west-exit\",\"door-open\",\"door2-open\",\"Luke2\",\"mask\",\"whistle\",\"flashlight\",\"food\",\"water\",\"firstaidkit\"],{\"Breathing Mask\":{\"name\":\"Breathing Mask\",\"image\":\"breathingmask.png\",\"width\":32,\"height\":32},\"Whistle\":{\"name\":\"Whistle\",\"image\":\"whistle.png\",\"width\":32,\"height\":32},\"Flashlight\":{\"name\":\"Flashlight\",\"image\":\"flashlight.png\",\"width\":32,\"height\":32},\"Food\":{\"name\":\"Food\",\"image\":\"food.png\",\"width\":32,\"height\":32},\"Water\":{\"name\":\"Water\",\"image\":\"waterbottle.png\",\"width\":32,\"height\":32},\"First Aid Kit\":{\"name\":\"First Aid Kit\",\"image\":\"firstaidkit.png\",\"width\":32,\"height\":32}},\"on\",[[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],2],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[]],[[1],-1],[[1],-1],[[0],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[0],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[0],-1],[[1],-1],[[0],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[]],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[0],-1],[[0],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[0],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[]],[[0],-1],[[1],-1],[[0],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],10],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[]],[[]],[[]],[[]],[[1],-1],[[]],[[]],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[0],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1],[[1],-1]]]" ++
	-- make sure all characters can be saved
	[' '..'~']

toJSON l = "{" ++ intercalate "," (map (\(k,v) -> show k ++ ":" ++ show v) l) ++ "}"
toChar True = '1'
toChar False = '0'

emergencyResponseCompression =
	let code = map (\(ch,co) -> ([ch], map toChar co)) $
		Map.toList $ codeToMap $ createCode representativeSample
	in putStrLn $ "var hencode = " ++ toJSON code ++
		";\nvar hdecode = " ++ toJSON (map (\(x,y)->(y,x)) code) ++ ";"

base64 = zip (['A'..'Z']++['a'..'z']++['0'..'9']++"-.")
	[[a,b,c,d,e,f] | a <- "01", b <- "01", c <- "01", d <- "01", e <- "01", f <- "01"]
base64JS =
	putStrLn $ "var b64decode = " ++ toJSON base64 ++
		";\nvar b64encode = " ++ toJSON (map (\(x,y)->(y,x)) base64) ++ ";"
