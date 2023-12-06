# SplitScreen.tsx

1. _Modular and reusable layout component_

2. _This component will render every child_

3. _It will default to center you elements_

   - To change this: simply add "centered" as props
     - `centered=false`

4. _It will default to divide screen space equally for all elements_

- To change this: simply add a "weights" array as props
  - General example:
    - `weigths=[a, b, c]`
      - _First child width/height = a/a+b+c_
      - _Second child width/height = b/a+b+c_
      - _First child width/height = c/a+b+c_
  - Specific example:
    - `weights=[1, 2, 1]`
      - _First child width/height = 1/4_
      - _Second child width/height = 2/4_
      - _Third child width/height = 1/4_

5. _It will default to layout your elements vertically_

   - To change to horisontal mode, simply add "row" as props
     - `row={true}`

6. _There's some addition styling props:_
   - Style your childrens parents parent
     - `styleParent`
   - Style your childrens parent
     - `styleChildren`
