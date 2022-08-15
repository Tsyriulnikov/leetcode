/*
Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

 

Example 1:


Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]
Example 2:


Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]
 

Constraints:

The number of nodes in the list is n.
1 <= k <= n <= 5000
0 <= Node.val <= 1000
 
*/

var reverseKGroup = function (head, k) {
    // Create a pointer which will traverse the head
    let curr = head;

    // Create a counter to determine how many nodes we have traversed
    let count = 0;

    // Loop until we find either the end of the LinkedList, or the k + 1 node
    while (curr != null && count != k) {
        curr = curr.next;
        count++;
    }

    // If we have found the k + 1 node
    if (count == k) {
        // Attempt to reverse the next k nodes (will return the value of curr if not enough nodes)
        curr = reverseKGroup(curr, k); // reverse list with k+1 node as head

        // Loop through the number of nodes in this group
        while (count-- > 0) {
            // Flip the nodes to point in the opposite direction (reverse them)
            let tmp = head.next;
            head.next = curr;
            curr = head;
            head = tmp;
        }

        // Swap the current head for the reversed one
        head = curr;
    }
    return head;
};