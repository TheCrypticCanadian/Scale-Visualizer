class ScaleGenerator {
  constructor() {
    this.scales = {
      'Major' : {
        'C' : [ 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C' ],
        'C#' : [ 'C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#', 'C#' ],
        'Db' : [ 'Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C', 'Db' ],
        'D' : [ 'D', 'E', 'F#', 'G', 'A', 'B', 'C#', 'D' ],
        'D#' : [ 'D#', 'E#', 'F##', 'G#', 'A#', 'B#', 'C##', 'D# ' ],
        'Eb' : [ 'Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D', 'Eb' ],
        'E' : [ 'E', 'F#', 'G#', 'A', 'B', 'C#', 'D#', 'E' ],
        'F' : [ 'F', 'G', 'A', 'Bb', 'C', 'D', 'E', 'F' ],
        'F#' : [ 'F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E#', 'F#' ],
        'Gb' : [ 'Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb', 'F', 'Gb' ],
        'G' : [ 'G', 'A', 'B', 'C', 'D', 'E', 'F#', 'G' ],
        'G#' : [ 'G#', 'A#', 'B#', 'C#', 'D#', 'E#', 'F##', 'G#' ],
        'Ab' : [ 'Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G', 'Ab' ],
        'A' : [ 'A', 'B', 'C#', 'D', 'E', 'F#', 'G#', 'A' ],
        'A#' : [ 'A#', 'B#', 'C##', 'D#', 'E#', 'F##', 'G##', 'A#' ],
        'Bb' : [ 'Bb', 'C', 'D', 'Eb', 'F', 'G', 'A', 'Bb' ],
        'B' : [ ' B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#', 'B' ],
        'Cb' : [ 'Cb', 'Db', 'Eb', 'Fb', 'Gb', 'Ab', 'Bb', 'Cb' ]
      },
      'Natural Minor' : {
        'C' : ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb', 'C'],
        'C#' : ['C#', 'D#', 'E', 'F#', 'G#', 'A', 'B', 'C#'],
        'Db' : ['Db', 'Eb', 'Fb', 'Gb', 'Ab', 'A', 'B', 'Db'],
        'D' : ['D', 'E', 'F', 'G', 'A', 'Bb', 'C', 'D'],
        'D#' : ['D#', 'E#', 'F#', 'G#', 'A#', 'B', 'C#', 'D#'],
        'Eb' : ['Eb', 'F', 'Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb'],
        'E' : ['E', 'F#', 'G', 'A', 'B', 'C', 'D', 'E'],
        'F' : ['F', 'G', 'Ab', 'Bb', 'C', 'Db', 'Eb', 'F'],
        'F#' : ['F#', 'G#', 'A', 'B', 'C#', 'D', 'E', 'F#'],
        'Gb' : ['Gb', 'Ab', 'Bbb', 'Cb', 'Db', 'Ebb', 'Fb', 'Gb'],
        'G' : ['G', 'A', 'Bb', 'C', 'D', 'Eb', 'F', 'G'],
        'G#' : ['G#', 'A#', 'B', 'C#', 'D#', 'E', 'F#', 'G#'],
        'Ab' : ['Ab', 'Bb', 'Cb', 'Db', 'Eb', 'Fb', 'Gb', 'Ab'],
        'A' : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A'],
        'A#' : ['A#', 'B#', 'C#', 'D#', 'F', 'F#', 'G#', 'A#'],
        'Bb' : ['Bb', 'C', 'Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb'],
        'B' : ['B', 'C#', 'D', 'E', 'F#', 'G', 'A', 'B'],
        'Cb' : [ 'Cb', 'Db', 'Ebb', 'Fb', 'Gb', 'Abb', 'Bbb', 'Cb' ]
      }
    }
  }
  getScale(type, root) {
    return this.scales[type][root]
  }
}
export default ScaleGenerator
