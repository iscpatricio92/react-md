## Upgrading to 1.0.0
Some of the general changes across components was to have more consistent naming and verbiage.
Most booleans are now an adjective instead of the `is` prefix. The `initial` prefix was also changed
to be `default` to match the initial React implementation for default values. For example:

```bash
isExpander -> expander
initialDrawerType -> defaultDrawerType
```

## SCSS and Styling
The className naming methodology was changed to [BEM](http://getbem.com/) with this release, so if
there were any custom css targeting `.md-` classNames, it is probably broken now. Woo! This change
was done so that custom styling can be done easier. It is now just the order the css is defined, a
media query, one level nesting, one joined selector, or applying a selector to an html element. 

The styles are now not included by default and each component has a mixin for including the css, media
queries, or theming. If you want the old behavior, use the `react-md-everything` mixin and the
`react-md-theme-everything` mixin. Each media query will be included by default when a component's
mixin is called if the `$md-media-included` variable is `true`. If you set this to false, you can
manually call the `react-md-COMPONENT-mobile`, `react-md-COMPONENT-desktop`, or `react-md-COMPONENT-media`
mixin to define them manually.


### Now vs Previous Versions

```scss
/* v1.0.0 */
@import '~react-md/src/scss/react-md';

// set any globals
@include react-md-everything; // all css generated

// or specific components only
@import '~react-md/src/scss/react-md';

@include react-md-text-fields;
@include react-md-dividers;

/* v0.3.x */

// set any globals
@import '~react-md/src/scss/react-md'; // all css generated

// or specific components...

@import '~react-md/src/scss/components/text-fields';
@import '~react-md/src/scss/components/dividers';
```

## Typography
Typography will now extend the base `html` tags by default when included. You can disable this behavior
be setting the `$md-typography-extended` variable to `false`;

## Avatars
- The `role` or `alt` prop is now required for `a11y` when the `src` prop has been defined.
- The suffixes were changed from `color-NUMBER` to the material design color name. `color-1` -> `red`.

## Bottom Navigations
- `containerStyle` - deprecated
- `containerClassName` - deprecated
- `onChange` - deprecated and replaced with `onNavChange`
- `initiallyVisible` - deprecated and replaced with `defaultVisible`
- `initialActiveIndex` - deprecated and replaced with `defaultActiveIndex`
- `transitionName` - deprecated
- `transitionEnterTimeout` - deprecated and replaced with `transitionDuration`
- `transitionLeaveTimeout` - deprecated and replaced with `transitionDuration`
- `actions` - deprecated and replaced by `links`


## Buttons
The `FlatButton`, `RaisedButton`, `IconButton`, and `FloatingButton` have been deprecated and will
be removed in the following release. All four types will now be in a single `Button` component. Each
version can be use by passing the correct flag: `flat`, `raised`, `icon`, or `floating`. The `FlatButton`
and `RaisedButton` no longer take in `FontIcon` as children. Instead, they reuse the `children` and `iconClassName`
props similar to the `IconButton` and `FloatingButton`.

```js
/* before */
<RaisedButton label="Hello" />

/* after */
<Button raised label="Hello" />
```

## Cards
### Card
- No longer raises on hover for desktop displays by default
- `initiallyExpanded` - deprecated and replaced with `defaultExpanded`
- `isExpanded` - deprecated and replaced with `expanded`.
- `iconChildren` - deprecated and replaced with `expanderIconChildren`
- `iconClassName` - deprecated and replaced with `expanderIconClassName`

### CardActionOverlay
Entire component is deprecated. There was no real benefit in this component since the same functionality
can be accomplished by a simple `<span>` or a list of children.

### CardActions
- `isExpander` - deprecated and replaced with `expander`

### CardMedia
The entire component has been deprecated. Use the `Media` and `MediaOverlay` components instead.

### CardTitle
- `isExpander` - deprecated and replaced with `expander`


## Chips
Chips were trashed and remade from the ground up. The `Chip` is now just a single `button` tag.

- The `remove` prop was discarded, and a `removable` prop was added to replace it. The `remove` will now
be handled by the base `onClick` function.
- The `removeIconClassName` and `removeIconChildren` were renamed `iconClassName` and `children`
respectively.
- To include an `Avatar`, you must now place it with the `avatar` prop instead of the `children`.

## Data Tables
### DataTable
- `baseId` - required for a11y if not a plain data table. This will be used to set the id for
any checboxes in the data table.

## Dialogs
- `isOpen` - deprecated and replaced with `visible` for more consistency across components
- `close` - deprecated and replaced with `onHide`
- `id` - is now required for a11y.
- either the `aria-describedby`, `aria-labelledby`, `aria-label`, or `title` prop is now required for a11y
- `transitionName` - deprecated since it no longer uses the `CSSTransitionGroup` to animate.
- `transitionEnter` and `transitionLeave` have been deprecated. The transition will always be enforced. You _can_
technically disable it by setting the the `transitionEnterDuration` or `transitionLeaveDuration` to `0`.
- `actionLeft` and `actionRight` - deprecated. The `Dialog` component will no longer include a way to build
a full page dialog.

A full page dialog will now enabled by specifing `fullPage` instead of using the `actionLeft` or `actionRight` prop.
This allows for a lot more flexibility in the dialog's content and reduces the bundle size for some people that are
not using the `Toolbar` component.

## File Inputs and File Uploads
- `id` required for a11y

## Lists
### List
- `subheader` - deprecated. Use the `Subheader` component as a child instead.
- `primarySubheader` - deprecated.

### ListItem
- `initiallyOpen` - deprecated and replaced with `defaultOpen`.


## Menus
- `close` - depreacted and replaced with `onClose`.
- `autoclose` - deprecated. Always autocloses
- `limitHeight` - deprecated. Always limits height.
- `expanderIconChildren` - deprecated. Uses css rotate instead of a separate icon.
- `expanderIconClassName` - deprecated. Uses css rotate instead of a separate icon.

Two new accessibility props have been added: `id` and `listId`. It is generally recomendded to
add the `id` prop. If the `listId` prop is undefined and the `id` prop has been defined, the `listId`
will be `${id}List`.

If the `listId` has been defined (by either method noted above), this will add an `aria-owns` attribute
to the menu.

## Navigation Drawers
- `NavigationDrawer.DrawerType` - deprecated and replaced with `NavigationDrawer.DrawerTypes` to be consistent.
- `menuIconChildren` - deprecated and replaced with `temporaryIconChildren`
- `menuIconClassName` - deprecated and replaced with `temporaryIconClassName`
- `closeIconChildren` - deprecated and replaced with `persistentIconChildren`
- `closeIconClassName` - deprecated and replaced with `persistentIconClassName`
- `onDrawerChange` - deprecated and replaced with `onVisibilityToggle` and/or `onMediaTypeChange`.
- `contentTransitionName` - deprecated and replaced with `transitionName`
- `contentTransitionEnterTimeout` - deprecated and replaced with `transitionEnterTimeout`
- `contentTransitionLeaveTimeout` - deprecated and replaced with `transitionLeaveTimeout`
- `initialDrawerType` - deprecated and replaced with `defaultMedia`

## Pickers
Both the `DatePicker` and `TimePicker` components now require an `id` and an `aria-label` prop
for accessibility. In addition the `initiallyOpen` prop has been deprecated and replaced with `defaultVisible`

### DatePicker
- `initialCalendarMode` - deprecated and replaced with `defaultCalendarMode`
- `initialYearsDisplayed` - deprecated and replaced with `yearsDisplayed`. Haven't had time to implement the
infinite years ability.

### TimePicker
- `initialTimeMode` - deprecated and replaced with `defaultTimeMode`

## Progress
Both the `CircularProgress` and `LinearProgress` components require an `id` for a11y.

## Select Fields
The select field component was rewritten to behave more like the natural html select component. It is no longer
implemented with the `TextField` component. The current value is now stored in a `hidden` input type.

In addition, the select field will now do any _heavy lifting_ for you to find out the current label/value from
your menu items. It is now valid to have this:

```js
const ajaxFetchedData = { "select_field_value": 2 };
const menuItems = [{ value: 1, name: 'One' }, { value: 2, name: 'Two' }];

...
<SelectField id="example" value={ajaxFetchedData} itemLabel="name" menuItems={menuItems} />
```

The select field will now properly display the text `'Two'` and the hidden input's value will be `2`.

Now deprecated props for the select field:
- `menuStyle` - Use `style` instead.
- `menuClassName` - Use `className` instead.
- `initiallyOpen` - Use `defaultOpen` instead.
- `floatingLabel` - A select field can only have floating labels now when using the `label` prop.
- `noAutoAdjust` - No adjustments happen anymore.
- `adjustMinWidth` - No adjustments happen anymore.

## Selection Controls
The `Checkbox`, `Radio`, and `Switch` components now require an `id` and `name` for a11y.

### Checkbox
- `checkedIcon` - deprecated and replaced with `checkedIconChildren` and `checkedIconClassName`
- `uncheckedIcon` - deprecated and replaced with `uncheckedIconChildren` and `uncheckedIconClassName`

### Radio
- `checkedIcon` - deprecated and replaced with `checkedIconChildren` and `checkedIconClassName`
- `uncheckedIcon` - deprecated and replaced with `uncheckedIconChildren` and `uncheckedIconClassName`

### Switch
- `toggled` - deprecated and replaced with `checked`
- `defaultToggled` - deprecated and replaced with `defaultChecked`

### RadioGroup
Completely deprecated. Use the new `SelectionControlGroup` instead.

## Sidebars
The sidebar component has been deprecated and replaced with the `Drawer` component. The existing `Sidebar` component
will attempt to convert its props into the `Drawer`'s props.

## Snackbars
- Renamed the `Snackbar` as a `SnackbarContainer` so if the snackbar was being imported as `react-md/lib/Snackbars/Snackbar`, it
will need to be changed to `react-md/lib/Snackbars/SnackbarContainer`.
- Deprecated the `dismiss` prop and renamed to `onDismiss`.
- When using a FAB, the `fab` prop now should be a `ref` to the fab instead of a `findDOMNode(this.refs.fab)`.


## Tabs
Too many changes. Just see the tabs page on how to use them now.

## Text Fields
The `TextField` component got rewritten from the ground up so there is no helpful migration messages.

- The height for the `TextField` is now handled by margins instead of specifically stating the height
for the `.md-text-field`. This allows for password managers (like LastPass) to more accuraly inject the
background image. It was bothering me that it was not placed in the correct spot. But it does overlap
with the password toggle now. Bleh.
- The `multiline TextField` now animates on height change.
- The `multiline TextField` must either be placed in a grid or in a flex container. It doesn't calculate height
correctly otherwise.
- The `id` prop is now required for a11y.
- `icon` prop no longer exists. It got replaced with `leftIcon` and `rightIcon`.
- `floatingLabel` - deprecated. If the `label` prop is defined, it will always be floating.
- `adjustMinWidth` - deprecated. Manually set the min width as a style prop instead.

## Toolbars
Toolbars are no longer styled with the `primary` color by default.
- `primary` - deprecated. Used `colored` instead
- `secondary` - deprecated. Can only be styled with the secondary color by default.
- `containerStyle` - deprecated. There is no longer an additional container.
- `containerClassName` - deprecated. There is no longer an additional container.
- `actionsLeft` - deprecated. Use the `nav` prop instead.
- `actionsRight` - deprecated. Use the `menu` prop and or `actions` prop instead.
