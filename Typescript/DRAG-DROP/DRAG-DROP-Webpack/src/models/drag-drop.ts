export interface Draggable {
  //set of eventHandlers
  dragStartHandler(event: DragEvent): void; //listener that listens to start of dragging element
  dragEndHandler(event: DragEvent): void; //listener that listens to end of dragging element
}

export interface DragTarget {
  dragOverHandler(event: DragEvent): void; //facilitate the drag by identifying the drop target
  dropHandler(event: DragEvent): void; //reacting to actual drop
  dragLeaveHandler(event: DragEvent): void; //give visual feedback
}
