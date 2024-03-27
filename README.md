# JsUseDocs - core

A tool/library to parse and alter jsdocs in files with the intent on supporting JsDoc and JsDoc style comments on code. This is to feed a later project to develop a interactive GUI for jsdocs however can act as a stand alone.

The idea is not just to make it easier to work with jsdocs but also to be able to make it easily exapndable to support plugins and custom tags, for example to add react or electron specific comments. Adherence to jsdoc standards is not strictly promised. 

# is this a replacement for jsdoc?

No it can be used alongside standard jsdoc and has minimal feature overlap. This allows for interacting with jsdoc in files as and when needed and not a way to compile it to a web view

# Common use cases

- Adding to tests to check they are Doc'd correctly
- Creating tools to automatically document a codebase
- creating interactive tools to explore a codebase

# this is not in a stable format at this time. I do not reccomend any use

# What are you defining a doc as?

so in an aim to support all things we are in danger of just returning just a whole document. our rules are to be(loosely) :

- all docs start with /** and end in */ 
- the line below the doc is the thing being documented (function, variable etc)
- All parameters/tags are formated between @tagname {variableA} variableb description and @tagname description 

these are preliminary rules for development please feel free to suggest more. I haven't really checked them against jsdoc either so I am certain to find edge cases but as time goes on it is hoped we can refine these rules to remain flexible but prevent the library returning junk. 
