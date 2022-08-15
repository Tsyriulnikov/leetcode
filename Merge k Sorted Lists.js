/*Merge k Sorted Lists

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

 

Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []
 

Constraints:

k == lists.length
0 <= k <= 104
0 <= lists[i].length <= 500
-104 <= lists[i][j] <= 104
lists[i] is sorted in ascending order.
The sum of lists[i].length will not exceed 104.
*/

var mergeKLists = function (lists) {
    // Return early if no ListNodes were supplied
    if (!lists.length) return null;

    // Loop through the supplied ListNodes
    for (let i = 1; i < lists.length; i++) {
        // Merge each ListNode with the first
        lists[0] = merge(lists[0], lists[i]);
    }

    // Return the merged ListNode
    return lists[0];
};

var merge = function (l1, l2) {
    // If either list is empty, return the other list's node
    if (l1 == null) return l2;
    if (l2 == null) return l1;

    // If l1 is lower
    if (l1.val < l2.val) {
        l1.next = merge(l1.next, l2);
        return l1;
    }
    // If l2 is lower
    else {
        l2.next = merge(l1, l2.next);
        return l2;
    }
};