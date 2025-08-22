# -*- coding: utf-8 -*-
"""
Created on Sun Aug 17 10:52:20 2025

@author: Student
"""

def substitute(alphabet, alphabet2, string):
    result = ''
    for c in string:
        idx = alphabet.find(c)
        if idx != -1:
            result += alphabet2[idx]
        else:
            result += c
    return result
    
def substitute_n(n, string):
    result = ''
    for c in string:
        idx = alphabet.find(c)
        if idx != -1:
            result += alphabet2[idx]
        else:
            result += c
    return result

alphabet  = 'abcdefghijklmnopqrstuvwxyz'
alphabet2 = 'defghijklmnopqrstuvwxyzabc'

encodedStr = substitute(alphabet, alphabet2, "the cake is a lie")
print(encodedStr)

decodedStr = substitute(alphabet2, alphabet, encodedStr)
print(decodedStr)
