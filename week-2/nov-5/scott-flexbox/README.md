#FlexBox Lecture Notes
###History
The Flexbox Layout (Flexible Box / FlexBox) module aims at providing a more efficient way to lay out, align, and distribute space among items in a container, even when their size is unknown and/or dynamic.

The main idea behind the flex layout is to give the container the ability to alter its items' width/height (and order) to best fill the available space.

Most importantly, the flexbox layout is direction-agnostic as opposed to the regular layouts (block which is vertically-based and inline which is horizontally-based). While those work well for pages, they lack flexibility to support large or complex applications.

####Note: 
Flexbox layout is most appropriate to the components of an application, and small-scale layouts, while the Grid layout is intended for larger scale layouts.

#Terminology
* Parent / Child
* Container / Items

#Usage
CSS Stylesheet:

###How the container / parent adapt to resizing

1. Apply flex properties to a container
`.container { display: flex; }`

2. Apply flex-flow for direction and wrap of children
	`.container { flex-direction: xx flex-wrap: yy; }`

	a. Flex-direction: Apply directional flow of child elements
		`.container { flex-direction: row | row-reverse | column | column reverse; }`

	b. Flex-wrap: Apply wrap when window resizes
		`.container { flex-wrap: nowrap | wrap | wrap-reverse; }`

###How the container/parent manage children
1. Justify-content: Alignment along the horizontal (main) axis
	`.container { justify-content: flex-start | flex-end | center | space-between | space-around; }`

2. Align-items: Aligment along the vertical (cross) axis
	`.container { align-items: flex-start | flex-end | center | baseline | stretch; }`

3. Align-content: Alignment along horizontal and vertical axis
	`.container { align-content: flex-start | flex-end | center | space-between | space-around | stretch; }`
	
###Properties of the children / items
####Note:
Float, clear and vertical-align have no effect on a flex item.

1. Order: Override the default source order of elements 

2. Flex-grow: Default 0; >0 will proportionally size children within parent. 
	`.item { flex-grow: <number>; /* default 0 */ }`

3. Flex-shrink: Default 1; Provides the ability for children to shrink within parent.
	`.item { flex-shrink: <number>; /* default 1 */ }`

4. Flex-basis: Set the default size of an element before the remaining space is distributed.
	`.item { flex-basis: <length> | auto; /* default auto */ }`

5. Flex: Shorthand for Grow, Shrink, and Basis
	`.item { flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ] }`

6. Align-self: Override default alignment of one specific child
	`.item { align-self: auto | flex-start | flex-end | center | baseline | stretch; }`
