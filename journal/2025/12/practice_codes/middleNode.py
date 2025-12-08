class SinglyLinkedListNode:
    def __init__(self, data):
        self.data = data
        self.next = None


def middleNode(head):
    iterator = head
    count = 0
    while iterator is not None:
        iterator = iterator.next
        count += 1
    middle = custom_round(count / 2)
    iterator = head
    for i in range(middle - 1, count - 1):
        iterator = iterator.next
    return iterator


import math


def custom_round(number):
    decimal_part = number - math.floor(number)
    if decimal_part >= 0.5:
        return math.ceil(number)
    else:
        return math.floor(number)
