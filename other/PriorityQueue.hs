module PriorityQueue (PriorityQueue, pempty, penqueue, pdequeue, ppeek, pisEmpty, listToPriorityQueue, priorityQueueToList) where
heaploc_add :: (Integer,Integer) -> (Integer,Integer)
heaploc_add (row,col) | col+1 == 2^row = (row+1,0)
                      | otherwise = (row,col+1)
heaploc_sub :: (Integer,Integer) -> (Integer,Integer)
heaploc_sub (row,col) | col==0 = (row-1,2^(row-1)-1)
                      | otherwise = (row,col-1)
heaploc_down :: (Integer,Integer) -> (Integer,Integer)
heaploc_down (row,col) = (row-1,col `mod` (2^(row-1)))
heaploc_left :: (Integer,Integer) -> Bool
heaploc_left (row,col) = col < 2^(row-1)

data HeapNode t = HeapNode (HeapNode t) (HeapNode t) t | EmptyHeap deriving (Show,Eq)
data PriorityQueue t = PriorityQueue (t -> t -> Bool) (HeapNode t) (Integer,Integer) --deriving (Show,Eq)

pempty :: (t -> t -> Bool) -> (PriorityQueue t)
pempty before = PriorityQueue before EmptyHeap (0,0)

checkHeap :: (t -> t -> Bool) -> (HeapNode t) -> (HeapNode t)
checkHeap before (HeapNode (HeapNode ll lr lv) (HeapNode rl rr rv) v) | rv `before` v && rv `before` lv
                                                                      = (HeapNode (HeapNode ll lr lv) (checkHeap before (HeapNode rl rr v)) rv)
checkHeap before (HeapNode (HeapNode ll lr lv) r v) | lv `before` v = (HeapNode (checkHeap before (HeapNode ll lr v)) r lv)
checkHeap before node = node

addHeap_r EmptyHeap loc what before = HeapNode EmptyHeap EmptyHeap what
addHeap_r (HeapNode l r v) loc newValue before | heaploc_left loc = checkHeap before (HeapNode (addHeap_r l (heaploc_down loc) newValue before) r v)
                                               | otherwise        = checkHeap before (HeapNode l (addHeap_r r (heaploc_down loc) newValue before) v)
penqueue :: (PriorityQueue t) -> t -> (PriorityQueue t)
penqueue (PriorityQueue cmp root loc) what = PriorityQueue cmp (addHeap_r root loc what cmp) (heaploc_add loc)

removeHeap_r :: (HeapNode t) -> (Integer,Integer) -> ((HeapNode t), t)
removeHeap_r (HeapNode EmptyHeap EmptyHeap v) (0,0) = (EmptyHeap, v)
removeHeap_r (HeapNode l r v) loc | heaploc_left loc = let (node,removed) = removeHeap_r l (heaploc_down loc)
                                                       in ((HeapNode node r v), removed)
                                  | otherwise        = let (node,removed) = removeHeap_r r (heaploc_down loc)
                                                       in ((HeapNode l node v), removed)
pdequeue :: (PriorityQueue t) -> (PriorityQueue t)
pdequeue (PriorityQueue before EmptyHeap loc) = (PriorityQueue before EmptyHeap loc)
pdequeue (PriorityQueue before root loc) = case removeHeap_r root (heaploc_sub loc)
                                    of ((HeapNode l r v), removed) -> PriorityQueue before (checkHeap before (HeapNode l r removed)) (heaploc_sub loc)
                                       (EmptyHeap, removed) -> PriorityQueue before EmptyHeap (heaploc_sub loc)

ppeek :: (PriorityQueue t) -> t
ppeek (PriorityQueue before EmptyHeap loc) = error "Heap is empty"
ppeek (PriorityQueue before (HeapNode l r v) loc) = v

pisEmpty (PriorityQueue before EmptyHeap loc) = True
pisEmpty _ = False

listToPriorityQueue before [] = pempty before
listToPriorityQueue before (x:xs) = (listToPriorityQueue before xs) `penqueue` x

priorityQueueToList heap | pisEmpty heap = []
                         | otherwise     = (ppeek heap) : (priorityQueueToList (pdequeue heap))

