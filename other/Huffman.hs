module Huffman where

import PriorityQueue
import Data.Map ((!),Map)
import qualified Data.Map as Map
import qualified Data.ByteString as ByteString

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

