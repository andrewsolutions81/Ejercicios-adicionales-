//https://leetcode.com/problems/valid-anagram/

/* Ejercicio 5 
242. Valid Anagram

Given two strings s and t, 
return true if t is an anagram 
of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging
the letters of a different word or phrase,
typically using all the original letters exactly once. */

function isAnagram(s,t){
    if(s.length === t.length && (s.split('').sort().join('')) === t.split('').sort().join('')){
      return true
    }
    return false
  }
  
  console.log("Ejercicio 5 Valid Anamgram")
  console.log(isAnagram("anagram", "nagaram"))// true 
  console.log(isAnagram("rat", "car"))// false