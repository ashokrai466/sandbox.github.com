import className from 'classnames'
import React, { PropTypes } from 'react'
import { DragLayer } from 'react-dnd'
const { div } = React.DOM
import { FieldIcon, getFieldFunctionDisplayName } from './FieldIcon'

function getItemStyles(props) {
  const { initialOffset, currentOffset } = props
  if (!initialOffset || !currentOffset) {
    return {
      display: 'none'
    }
  }

  let { x, y } = currentOffset

  const transform = `translate(${x}px, ${y}px)`
  return {
    transform: transform,
    WebkitTransform: transform,
    MozTransform: transform,
    msTransform: transform
  }
}

class ShelfFieldDragPreview extends React.Component {
  render() {
    const { name, type } = this.props
    const { typecast, func } = this.props.field
    return div({className: "field-wrap"},
               div({className: "icon-wrap"}, <FieldIcon type={type} typecast={typecast} />),
               div({className: "func-wrap"}, getFieldFunctionDisplayName(func)),
               div({className: className("name-wrap", {"has-func": func != null})}, name))
  }
}

class TableFieldDragPreview extends React.Component {
  render() {
    return div({className: "field-wrap"},
               div({className: "icon-wrap"}, <FieldIcon type={this.props.type}/>),
               div({className: "name-wrap"}, this.props.name))
  }
}

class FieldDragLayer {
  renderItem(type, item) {
    switch (type) {
    case 'ShelfField':
      return <ShelfFieldDragPreview {...item} />
    case 'TableField':
      return <TableFieldDragPreview {...item} />
    default:
      return null
    }
  }

  render() {
    const { item, itemType, isDragging } = this.props
    if (!isDragging) return null
    return div({className: className("field-drag-layer")},
               div({className: "field-drag-wrap", style: getItemStyles(this.props)},
                   this.renderItem(itemType, item)))
  }
}

FieldDragLayer.propTypes = {
  item: PropTypes.object,
  itemType: PropTypes.string,
  initialOffset: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }),
  currentOffset: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }),
  isDragging: PropTypes.bool.isRequired
}

export default DragLayer((monitor) => ({
  item: monitor.getItem(),
  itemType: monitor.getItemType(),
  initialOffset: monitor.getInitialSourceClientOffset(),
  currentOffset: monitor.getSourceClientOffset(),
  isDragging: monitor.isDragging()
}))(FieldDragLayer)