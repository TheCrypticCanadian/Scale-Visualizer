import { Instrument } from "piano-chart";
import ScaleGenerator from './ScaleGenerator.js'

class GUI {
    constructor(container) {
        this.container = container;
        this.generator = new ScaleGenerator();

        const e = document.getElementById("dropdownRoot");
        const rootNote = e.options[e.selectedIndex].value;
        
        const e2 = document.getElementById("dropdownScale");
        const scale = e2.options[e2.selectedIndex].value;

        const notes = this.generator.getScale(scale,rootNote);
        this.piano = new Instrument(container, {
            startOctave: 3,
            endOctave: 5,
            highlightedNotes: notes,
            specialHighlightedNotes: [{ note: rootNote }],
          }
        );
        this.piano.create();
    }

}
export default GUI
