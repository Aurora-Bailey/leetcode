/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let sum = BigInt(reverseJoinLinkedListValueToString(l1)) + BigInt(reverseJoinLinkedListValueToString(l2))
    let str = '' + sum
    let rev = str.split('').reverse().join('')
    return strToLinkedList(rev)
};

var reverseJoinLinkedListValueToString = function(ll, str = '') {
    if(ll.next !== null) str = reverseJoinLinkedListValueToString(ll.next, str)
    str += ll.val
    return str
}

var strToLinkedList = function(str) {
    let ll = {}
    let current = ll
    let arr = str.split('')

    for (let index = 0; index < arr.length; index++) {
        const e = arr[index];
        current.val = parseInt(e)
        if (index < arr.length - 1) {
            current.next = {}
            current = current.next
        }
    }

    current.next = null
    return ll
}

console.log(addTwoNumbers({"val":2,"next":{"val":4,"next":{"val":3,"next":null}}}, {"val":5,"next":{"val":6,"next":{"val":4,"next":null}}}))