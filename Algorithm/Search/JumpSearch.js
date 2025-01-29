/*  Jump Search
    Jump search is a searching algorithm for sorted arrays. 
    It works by jumping ahead by fixed steps and then performing a linear search within a smaller segment. 
    The optimal step size is usually the square root of the array length. 
    Jump search offers a time complexity of O(√n), making it a good compromise between linear and binary search.

    Use Cases:
    1. Sorted datasets where binary search is too complex.
    2. Cases where an efficient search algorithm is needed without the overhead of binary search.
*/