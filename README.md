# React Template

###### Author: Matt Czencz

### Summary
This is a library / template I am working on to make a projects more consistent and faster. This is meant to work a lot like other libraries, such as Bootstrap and Bulma, but with my own premade styling and some bells and whistles I can customize. Below you will find a list of components, their properties  and value pairs to get the styling you desire. 

### Technologies Used
<ul>
    <li>ReactJS</li>
    <li>Styled Components</li>
    <li>React Router</li>
</ul>

# Components

## Nav
### What builds it?
<ol>
    <li>Navbar: This is the top level of the navigation bar. This is the element that will hold the Logo (whether text, or image), and the nav links.</li><br>
    <li>NavItems: This is the element that will hold each nav item. This is used to group them up so we can handle the spacing appropriately.</li><br>
    <li>NavItem: This is the actual link that will be displayed on the navigation. For example: About, Store, Cart, etc.</li>
</ol>

### Properties:
<u><strong>Navbar</strong></u><br>
Property Name | Description | Values | Example
| :---: | :---: | :---: | :---:
<strong>type</strong>  | Allows you to set the navbar type. | "Light" <br> "Dark" | `<Navbar type="light">...`

#

<u><strong>Container</strong></u><br>
Property Name | Description | Values | Example
| :---: | :---: | :---: | :---:
<strong>fj</strong>  | Allows you to set the justify-content. | "Start" <br> "End" <br> "Center" <br> "Between" <br> "Around" <br> "Evenly" <br> "Stretch" <br> "Inherit" | `<Container fj="center">...`