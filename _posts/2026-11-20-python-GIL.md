---
layout: page
title: "on the python GIL and multi-threading"
date: 2026-11-20
---


before python 3.13, there was no "real parallelism" in python. here, i'll yap a little bit about concurrency and python. anytime i mention python here, i'll be referring to the cpython interpreter.


## before concurrency 
when python was initially created (around 1989), processors had very few cores. the ideology was that processors could be scaled vertically and be made faster, instead of horizontally. therefore, the programming paradigms that were present in the late 1980s were significantly different from what we are used to today: they focused on optimizing execution on one processor instead of multiple processors. 

the **stanford hydra chip multiprocessor** (CMP) in the 1990s was one of the first projects that demonstrated the viability of multi-core processors, and it caught on. many programming languages (like C) started supporting multithreading, so python's creator *guido van rossum* thought it would be a good idea to implement multithreading support in python as well. 

however, python is interpreted, and support for true parallel execution (which was still quite unpopular at the time) would've meant a full overhaul of the entire core interpreter logic. to avoid this, the GIL was born. 


## the python interpreter 
WIP! i have notes i want to add soon :)

