# Screenshots
![image](https://user-images.githubusercontent.com/26649558/133883281-418d3229-f9e9-465c-88c4-4e8f6c5d3ac7.png)

# Local Setup 

```
git clone https://github.com/takshch/hierarchy-view
cd hierarchy-view
npm i 
```

# Development

```
cd hierarchy-view
npm run start
```

# More info
1. Styles - **BEM CSS**(not a library but a Methodology or convention- http://getbem.com/introduction/) is used.
    1. card
    2. hierarchy
2. Components
    1. Card(with it's ProgressBar)
    2. Hierarchy, HierarchyChildren
    3. HierarchyContainer - for handling state for hierarchy and showing loading state when it's fetching data.
3. Services
    1. **getAllCards** - to fetch details of a card with it's all n level child cards.
