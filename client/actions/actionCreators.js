// increment
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

// add comment
export function addComment(postid, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postid,
    author,
    comment
  }
}

// remove comment
export function removeComment(postid, i) {
  return {
    type: 'REMOVE_COMMENT',
    postid,
    i
  }
}
