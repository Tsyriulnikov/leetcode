/*
Merge Two Sorted Lists

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]
*/
var mergeTwoLists = function(l1, l2) {
    if (!l1 || !l2) return l1 || l2; 
    const linkThem = (smaller, greater) => {
        smaller.next = mergeTwoLists(smaller.next, greater);
        return smaller;
    };
    return l1.val < l2.val ? linkThem(l1,l2) : linkThem(l2,l1);
};