import React, { useState, useEffect } from "react"; // Importing React from react is a must. useState is an aditional one I have imported from react to managestates.
import moment from "moment"; // This is to format date and time. This has to be installed manually using 'npm install moment' command.
import "./App.css"; // The CSS file of App.js
import ListItem from "./SimpleComponents/ListItem"; // This is a component I have created separately.
import cover01 from "./Images/cover001.jpg"; // When we import images like this, we can used 'src={cover01}' in <img> tags to use it.
import cover02 from "./Images/cover002.jpg";
import cover03 from "./Images/cover003.jpg";
import ScrollUpButton from "./SimpleComponents/ScrollUpButton";
// The main function of App.js file is App(). We name it after the file's name as a standard.
function NameList() {
  const [loadData, setLoadData] = useState(new Date());
  // What is done below is defining a JSON array through useState.
  // The speciality of using this is if a normal JSON array is defined without using useState, if the array is updated, the page refreshes to show the changes.
  // In this way, it only rerender when the array is updated and shows without refreshing the page.
  const [nameList, setNameList] = useState([
    {
      id: 1,
      style: "superman",
      name: {
        title: "Mr",
        first: "Super",
        last: "Man",
      },
      location: {
        city: "Metropolis",
      },
      description:
        "Superman is a fictional superhero. The character was created by writer Jerry Siegel and artist Joe Shuster, and first NameListeared in Action Comics #1, a comic book published on April 18, 1938.[1] The character regularly appears in comic books published by DC Comics, and has been adapted to a number of radio serials, movies, and television shows. Superman was born on the planet Krypton and was given the name Kal-El at birth. As a baby, his parents sent him to Earth in a small spaceship moments before Krypton was destroyed in a natural cataclysm. His ship landed in the American countryside, near the fictional town of Smallville. He was found and adopted by farmers Jonathan and Martha Kent, who named him Clark Kent. Clark developed various superhuman abilities, such as incredible strength and impervious skin. His foster parents advised him to use his abilities for the benefit of humanity, and he decided to fight crime as a vigilante. To protect his privacy, he changes into a colorful costume and uses the alias 'Superman' when fighting crime. Clark Kent resides in the fictional American city of Metropolis, where he works as a journalist for the Daily Planet. Superman's supporting characters include his love interest and fellow journalist Lois Lane, Daily Planet photographer Jimmy Olsen and editor-in-chief Perry White. His most well-known villain is Lex Luthor. Superman is part of the DC Universe, and as such often appears in stories alongside other DC Universe heroes such as Batman and Wonder Woman.",
      email: "super.man@example.com",
      dob: {
        date: "1753-07-20T09:44:18.674Z",
      },
      picture: {
        // This is an array of JSON objects and an object is symbolized using a pair of curly braces.
        // If we import the image at the top and use it here like "medium: {imageName}" it cannot be acceessed through the loop. Therefore, this has to go with require() method.
        large: require("./Images/user001.jpg"),
      },
    },

    {
      id: 2,
      style: "batman",
      name: {
        title: "Mr",
        first: "Bat",
        last: "Man",
      },
      location: {
        city: "Ghothem City",
      },
      description:
        "Batman is a fictional superhero appearing in American comic books published by DC Comics. The character was created by artist Bob Kane and writer Bill Finger,[2][3] and first appeared in Detective Comics #27 in 1939. Originally named the \"Bat-Man,\" the character is also referred to by such epithets as the Caped Crusader, the Dark Knight, and the World's Greatest Detective. Batman's secret identity is Bruce Wayne, a wealthy American playboy, philanthropist, and owner of Wayne Enterprises. Batman originated from an incident in Bruce's childhood; after witnessing the murder of his parents Dr. Thomas Wayne and Martha Wayne, he swore vengeance against criminals, an oath tempered by a sense of justice. Bruce trains himself physically and intellectually and crafts a bat-inspired persona to fight crime. Batman operates in the fictional Gotham City with assistance from various supporting characters, including his butler Alfred, police commissioner Jim Gordon, and vigilante allies such as Robin. Unlike most superheroes, Batman does not possess any inhuman superpowers. He does, however, possess a genius-level intellect and is a peerless martial artist, and his vast wealth affords him an extraordinary arsenal of weaponry and equipment. A large assortment of villains make up Batman's rogues gallery, including his nemesis, the Joker.",
      email: "bat.man@example.com",
      dob: {
        date: "1970-08-23T01:14:28.374Z",
      },
      picture: {
        large: require("./Images/user002.jpg"),
      },
    },

    {
      id: 3,
      style: "aquaman",
      name: {
        title: "Mr",
        first: "Aqua",
        last: "Man",
      },
      location: {
        city: "Atlantis",
      },
      description:
        "Aquaman (Arthur Curry) is a fictional superhero appearing in American comic books published by DC Comics. Created by Paul Norris and Mort Weisinger, the character debuted in More Fun Comics #73 (November 1941). Initially a backup feature in DC's anthology titles, Aquaman later starred in several volumes of a solo comic book series. During the late 1950s' and 1960s' superhero-revival period known as the Silver Age, he was a founding member of the Justice League. In the 1990s' Modern Age, writers interpreted Aquaman's character more seriously, with storylines depicting the weight of his role as king of Atlantis. The character's original 1960s animated appearances left a lasting impression, making Aquaman widely recognized in popular culture and one of the world's most recognized superheroes. Jokes about his wholesome, weak portrayal in Super Friends and perceived feeble powers and abilities have been staples of comedy programs and stand-up routines, leading DC at several times to attempt to make the character edgier or more powerful in comic books. Modern comic book depictions have attempted to reconcile these various aspects of his public perception, with many versions often casting Aquaman as serious and brooding, saddled with an ill reputation, and struggling to find a true role and purpose beyond his public side as a deposed king and a fallen hero.",
      email: "aqua.man@example.com",
      dob: {
        date: "1977-12-22T01:14:28.374Z",
      },
      picture: {
        large: require("./Images/user003.jpg"),
      },
    },

    {
      id: 4,
      style: "wonderwoman",
      name: {
        title: "Miss",
        first: "Wonder",
        last: "Woman",
      },
      location: {
        city: "Themyscira",
      },
      description:
        "Wonder Woman is a fictional superhero appearing in American comic books published by DC Comics. The character is a founding member of the Justice League. The character first appeared in All Star Comics #8 in October 1941[1] with her first feature in Sensation Comics #1 in January 1942. The Wonder Woman title has been published by DC Comics almost continuously except for a brief hiatus in 1986.[3] In her homeland, the island nation of Themyscira, her official title is Princess Diana of Themyscira. When blending into the society outside of her homeland, she sometimes adopts her civilian identity Diana Prince. Wonder Woman was created by the American psychologist and writer William Moulton Marston (pen name: Charles Moulton), and artist Harry G. Peter. Marston's wife, Elizabeth, and their life partner, Olive Byrne, are credited as being his inspiration for the character's appearance. Marston's comics featured his ideas on DISC theory, and the character drew a great deal of inspiration from early feminists, and especially from birth control pioneer Margaret Sanger; in particular, her piece \"Woman and the New Race\". Wonder Woman's origin story relates that she was sculpted from clay by her mother Queen Hippolyta and was given a life to live as an Amazon, along with superhuman powers as gifts by the Greek gods.",
      email: "wonder.woman@example.com",
      dob: {
        date: "1898-01-01T09:44:18.674Z",
      },
      picture: {
        large: require("./Images/user004.jpg"),
      },
    },
  ]);

  const description =
    "Homo sapiens is the only extant human species, all of whose members are of the subspecies Homo sapiens sapiens. The name is Latin for wise man, and was introduced in 1758 by Carl Linnaeus (who is himself the lectotype for the species). Extinct species of the genus Homo include Homo erectus (extant from roughly 2 to 0.1 million years ago) and a number of other species (by some authors considered subspecies of either H. sapiens or H. erectus). The divergence of the lineage leading to H. sapiens out of ancestral H. erectus (or an intermediate species such as Homo antecessor) is estimated to have occurred in Africa roughly 500,000 years ago. The earliest fossil evidence of early Homo sapiens appears in Africa around 300,000 years ago, with the earliest genetic splits among modern people, according to some evidence, dating to around the same time. Sustained archaic admixture is known to have taken place both in Africa and (following the recent Out-Of-Africa expansion) in Eurasia, between about 100,000 and 30,000 years ago.";
  // UseEffect is a hook which runs the body whenever the page's content is changed. If we don't give 2 second parameter for this, the method will run infernite times.
  useEffect(() => {
    // This is a get request. Fetch is the default ways of calling the GET. Since it is a promise, we have to define a '.then' clause also.
    fetch("https://randomuser.me/api")
      .then((response) => {
        return response.json();
      })
      .then((responceData) => {
        // ... is to restructure the array. nameList is also an array with 4 elements. results has another element. So initially this loads 5 objects in the page.
        setNameList(() => [...nameList, responceData.results[0]]);
      });
    // this second parameter says, if any of the values in the array is changed, run the method.
  }, [loadData]);

  // In this function, it does a similar job as 'Enhanced For Loop' in JAVA.
  // Here, 'card' is the iterator and it takes object by object in the given JSON array and take it through the process in the function body.
  // When it iterate through the whole array once, the function stops.
  const nameListComponent = () => {
 
    return nameList.map((card) => {
      return (
        <ListItem
          key={Math.random()}
          name={`${card.name.first} ${card.name.last}`}
          city={card.location.city}
          email={card.email}
          styles={card.style}
          // Here 'moment' framework is used to format the date and time.
          birthday={moment(card.dob.date).format("L")}
          avatar={card.picture.large}
          description={description}
        />
      );
    });
  };

  // This adds a new super hero to the list. Since the array is defined using useState, the new hero appears without refreshing the page, like a FLASH!
  const addHeroHandler = () => {
    // concat() is the function used to append the new object to the array.
    // The difference is it gets a coppy of current array and create a new array and add the new object to it and return the new array.
    // That is called "Imutable". If we make the array "mutable" (make changes to the current array) unexpected errors can come. So always try to keep arrays immutable.
    // If this is written as "setNameList(nameList.concat(newHero));", then it returns the array to the state and then the state gets updated.
    // Therefore, it has been included to a wrapper function and that is the function with the "=>" symbol.
    // setNameList((nameList) => {
    //   return nameList.concat(newHero);
    // });

    // calls setLoadDate method with a new date.
    setLoadData(new Date());
  };

  return (
    // React function can return only one component. i.e. the whole script has to be wrapped using a single pair of tags.
    // We usually use <div></div> tags for this. But react has given this <React.Fragment></React.Fragment> tags instead.
    <React.Fragment>
      {/* In JS we use "class" to define the CSS or Bootstrap class. But in react we use "className" instead because class is taken already. */}
      <div className="PageColor">
        <h1 className="Title">DC SUPER HEROS</h1>  
        {/* This is the flyer (image slider) at the top of the web page after the nav bar. This is a Bootstrap template. */}
        <div
          id="carouselExampleIndicators"
          className="carousel slide Carousel"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            {/* These are the indicator square cells which indicates the number of slides and currently showing image. */}
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          {/* In this area, the immages slides */}
          <div className="carousel-inner">
            {/* These are the images in the slides. We can add any number of images repeating below div clause*/}
            <div className="carousel-item active">
              <img src={cover01} className="d-block w-100 Slider" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={cover02} className="d-block w-100 Slider" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={cover03} className="d-block w-100 Slider" alt="..." />
            </div>
          </div>
          {/* These are the left and right arrows */}
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="Container">
          {/* This is the button to add a new hero to the page. 
          Here the onclick event is called as "onClick={addHeroHandler}" because if we use it like "onClick={addHeroHandler()}" 
          then the function triggers then and there without waiting to the button to be clicked */}
          {/* <button className="btn btn-dark Button" onClick={addHeroHandler}>
            Add another DC comic super hero
          </button> */}
          
          {/* This is where the hero name list loads. "nameListComponent()" is the function which has map() function in it.
          Here we have called the function as "nameListComponent()" becaude here we don't want to wait for a button click. We want to load the list whenever the App.js file loads */}
          <div className="Page">{nameListComponent()}</div>
        </div>
        <button className = "Button btn btn-dark" onClick = {addHeroHandler}>Add a person to the list</button>

      </div>
      <ScrollUpButton className="ScrollUpButton" ToggledStyle={{right: 100}}/>
    </React.Fragment>
  );
}
// After all of the steps we have to export the function. Then we can use it in another ifle or in the index.html file.
export default NameList;
