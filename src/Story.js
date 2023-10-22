import { Float, Html } from "@react-three/drei"

export default function Experience(props){

    const handleUpdateState = () => {
        props.setDisplayState(!props.displayState);
        console.log(props)
      }


return<>

<Html
  as='div' // Wrapping element (default: 'div')
   // The className of the wrapping element (default: undefined)
  prepend // Project content behind the canvas (default: false)
  center // Adds a -50%/-50% css transform (default: false) [ignored in transform mode]
  fullscreen // Aligns to the upper-left corner, fills the screen (default:false) [ignored in transform mode]
  distanceFactor={10} // If set (default: undefined), children will be scaled by this factor, and also by distance to a PerspectiveCamera / zoom by a OrthographicCamera.
  zIndexRange={[100, 0]} // Z-order range (default=[16777271, 0])
   // If true, applies matrix3d transformations (default=false)
  sprite // Renders as sprite, but only in transform mode (default=false)
  onOcclude={(visible) => null} // Callback when the visibility changes (default: undefined)
  
>
<div className="story">
  <h1>The title for this spooky story could be "The Curse of the Fish Sauce: Raph's Frightful Ordeal."</h1>
  <br/>
  <p>In the quiet, moonlit town of Willowbrook, a chilling tale was whispered through the dark streets, a story of a man named Raph and a sinister bottle of fish sauce.

Raph was a recluse, a man of odd habits, and a long history of eccentricity. He lived in a ramshackle cottage on the outskirts of the village, surrounded by a forest that always seemed to shiver in the shadows, even on the brightest days. His unkempt appearance, wild hair, and a wardrobe filled with tattered, dark garments only added to the mystique that cloaked him.

The townsfolk avoided Raph, but curiosity got the better of some villagers. It was rumored that hidden within the depths of his cottage was a bottle of fish sauce with a notorious reputation - a sauce that, when consumed, unleashed ghastly visions and sinister powers.

One fateful evening, while the moon hung low and a thick fog enveloped Willowbrook, Raph decided to venture into the depths of the forest and seek out his eerie cottage. Armed with only a flickering lantern, he pushed through the underbrush, guided by his unwavering curiosity.

The cottage appeared as if summoned by dark magic, with its timeworn boards creaking in the chilling wind. The air was heavy with an unearthly silence as Raph pushed open the creaking door. Inside, the cottage was a twisted labyrinth of dusty relics, but what caught Raph's eye was a peculiar bottle on a cluttered shelf.

It was a small, ancient flask, its contents an oily, viscous liquid. The label read <span onPointerEnter={handleUpdateState} onPointerLeave={handleUpdateState}>"Fisherman's Curse"</span> in faded, foreboding letters. Raph's trembling hands reached for the bottle, and his heart raced with anticipation. The legends he had heard painted images of grotesque and horrifying visions, but Raph was undeterred.

With a deep breath, Raph uncorked the bottle and took a hesitant sip. A wave of nausea washed over him, and he felt an icy grip on his soul. His surroundings transformed, and he found himself in a nightmarish world. Phantoms and shadows danced in torment, whispering sinister secrets that sent shivers down his spine.

As the ghastly visions continued to unravel, Raph felt an unseen force pulling him deeper into a realm of darkness. He could hear the mournful wails of spirits and see the spectral faces of those who had been trapped in this cursed place. Raph knew he had made a grave mistake.

</p>

  </div>

</Html>

</>

}