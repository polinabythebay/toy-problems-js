
function Node(value) {
  var obj = {};
  obj.value = value || null;
  obj.next = null;
  return obj;
}

function hasCycle(linkedList) {
  //if fast one equals
  //slow one
  //we have a cycle
  var slow = linkedList;
  var fast = linkedList;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }
  return false;
}