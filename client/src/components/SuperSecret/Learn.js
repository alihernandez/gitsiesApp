import React from "react";
import "./Learn.css";



function Learn() {
  return (
    <div >
      <div class="header">
        <h1>Beck's Super Awesome Top Ten Totally Tabular Anime</h1>
        <p>by: Beck Bartleson</p>
      </div>

      <table class="beckAnime">
        <thead class="text-flicker-in-glow">
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Year</th>
            <th>Synopsis</th>
            <th>Image</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          <tr id="neonGen">
            <td class="ranking">1</td>
            <td class="anime_title">Neon Genesis: Evangelion</td>
            <td class="year">1996</td>
            <td class="synopsis">
              Fifteen years after the Second Impact, Shinji Ikari joins his
              father's group NERV as one of several teenage mecha pilots
              fighting the monstrous Angels. Starring:Megumi Ogata, Kotono
              Mitsuishi, Yuriko Yamaguchi.
            </td>
            <td class="poster">
              <img
                src="data:image/jpeg;base64,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"
                id="neonPic"
                alt="Neon_Genesis"
              />
            </td>
            <td class="wiki_link">
              <a href="https://en.wikipedia.org/wiki/Neon_Genesis_Evangelion">
                <span>Wiki</span>
              </a>
            </td>
          </tr>
          <tr>
            <td class="ranking">2</td>
            <td class="anime_title">Ghost in the Shell</td>
            <td class="year">1995</td>
            <td class="synopsis">
              Two animated films based on the original manga have been released,
              both directed by Mamoru Oshii and animated by Production I.G.
              Ghost in the Shell was released in 1995 and follows the "Puppet
              Master" storyline from the manga. It was re-released in 2008 as
              Ghost in the Shell 2.0 with new audio and updated 3D computer
              graphics in certain scenes.[5] Innocence, otherwise known as Ghost
              in the Shell 2: Innocence, was released in 2004, with its story
              based on a chapter from the first manga.
            </td>
            <td class="poster">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/c/ca/Ghostintheshellposter.jpg"
                id="ghostInTheShell"
                alt="ghost_in_the_shell_image"
              />
            </td>
            <td class="wiki_link">
              <a href="https://en.wikipedia.org/wiki/Ghost_in_the_Shell_(1995_film)">
                <span>Wiki</span>
              </a>
            </td>
          </tr>
          <tr>
            <td class="ranking">3</td>
            <td class="anime_title">Bubblegum Crisis</td>
            <td class="year">1987</td>
            <td class="synopsis">
              The series involves the adventures of the Knight Sabers, an
              all-female group of mercenaries who don powered exoskeletons and
              fight numerous problems, most frequently rogue robots. The success
              of the series spawned several sequel series.
            </td>
            <td class="poster">
              <img src="https://upload.wikimedia.org/wikipedia/en/c/c1/BGC_OVA.png" alt="poster"/>
            </td>
            <td class="wiki_link">
              <a
                href="https://en.wikipedia.org/wiki/Bubblegum_Crisis"
                id="bubblegum"
                alt="Bubblegum_Crisis"
              >
                <span>Wiki</span>
              </a>
            </td>
          </tr>
          <tr>
            <td class="ranking">4</td>
            <td class="anime_title">Cowboy Beebop</td>
            <td class="year">1998</td>
            <td class="synopsis">
              The futuristic misadventures and tragedies of an easygoing bounty
              hunter and his partners.
            </td>
            <td class="image">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4fVRtCNqxngYsSBWuqJWi0qx3wILKjbbuCYGVJW8UFrwB8KC3" alt="poster"/>
            </td>
            <td class="wiki_link">
              <a
                href="https://en.wikipedia.org/wiki/Cowboy_Bebop"
                id="Cowboy Beebop"
                alt="Cowboy_beebop"
              >
                <span>Wiki</span>
              </a>
            </td>
          </tr>
          <tr>
            <td class="ranking">5</td>
            <td class="anime_title">Spirited Away</td>
            <td class="year">2001</td>
            <td class="synopsis">
              Ten-year-old Chihiro and her parents are traveling to their new
              home. Her father, a man who loves to take shortcuts, ends up in
              front of a tunnel leading to what appears to be an abandoned
              village, which Chihiro's father insists on exploring despite his
              daughter's misgivings. While exploring, Chihiro finds an exquisite
              bathhouse and meets a boy named Haku, who warns her to return
              across the riverbed before sunset. However, Chihiro discovers too
              late that her parents have transformed into pigs, and she is
              unable to cross the now-flooded river.
            </td>
            <td class="image">
              <a href="https://en.wikipedia.org/wiki/Spirited_Away">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/d/db/Spirited_Away_Japanese_poster.png"
                  id="spiritedAway"
                  alt="spirited_away_poster"
                />
              </a>
            </td>
            <td class="wiki_link">
              <a href="https://en.wikipedia.org/wiki/Spirited_Away">
                <span>Wiki</span>
              </a>
            </td>
          </tr>
          <tr>
            <td class="ranking">6</td>
            <td class="anime_title">Dragon Ball Z</td>
            <td class="year">1989</td>
            <td class="synopsis text-flicker-in-glow">
              Dragon Ball Z continues the adventures of Son Goku, who, along
              with his companions, defend the Earth against villains ranging
              from aliens (Vegeta, Frieza), androids (Cell) and magical
              creatures (Majin Buu). While the original Dragon Ball anime
              followed Goku from childhood to early adulthood, Dragon Ball Z is
              a continuation of his adult life, but at the same time parallels
              the life of his son, Gohan, as well as the development of his
              rival Vegeta.
            </td>
            <td class="image">
              <img
                src="https://m.media-amazon.com/images/M/MV5BMGMyOThiMGUtYmFmZi00YWM0LWJiM2QtZGMwM2Q2ODE4MzhhXkEyXkFqcGdeQXVyMjc2Nzg5OTQ@._V1_.jpg"
                id="DragonBallz"
                alt="Dragon_Ballz"
              />
            </td>
            <td class="wiki_link">
              <a href="https://en.wikipedia.org/wiki/Dragon_Ball_Z">
                <span>Wiki</span>
              </a>
            </td>
          </tr>
          <tr>
            <td class="ranking">7</td>
            <td class="anime_title">Pokémon</td>
            <td class="year">1997</td>
            <td class="synopsis">
              In the first part of the Original Series, Ash Ketchum is allowed
              to start his journey in the world of Pokémon and dreams of
              becoming a Pokémon master
            </td>
            <td class="image">
              <img
                src="https://m.media-amazon.com/images/M/MV5BNjU1YjM2YzAtZWE2Ny00ZWNiLWFkZWItMDJhMzJiNDQwMmI4XkEyXkFqcGdeQXVyNTU1MjgyMjk@._V1_UY1200_CR113,0,630,1200_AL_.jpg"
                id="pokemon"
                alt="_pokemon"
              />
            </td>
            <td class="wiki_link">
              <a href="https://en.wikipedia.org/wiki/Pok%C3%A9mon_(anime)">
                <span>Wiki</span>
              </a>
            </td>
          </tr>
          <tr>
            <td class="ranking">8</td>
            <td class="anime_title">Gunsmith Cats</td>
            <td class="year">'91 - '97</td>
            <td class="synopsis">
              Nineteen-year-old Irene "Rally" Vincent operates the titular
              "Gunsmith Cats" gun shop but also works as a bounty hunter, which
              is the impetus behind many of the stories. She is assisted in both
              activities by her housemate, former prostitute "Minnie" May
              Hopkins. Rally is an expert combat shooter and marksman with just
              about every firearm in existence, as well as a brilliant driver.
              May is an explosives expert, knowing the inner workings of and
              many uses of all manner of explosive devices. Teenage ex-burglar
              and lock-picker Misty Brown later joins the team and there is also
              Becky Farrah, a top, if expensive, source of information on
              underworld activity.
            </td>
            <td class="image">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/1/1b/Gunsmith_Cats_cover.jpg"
                id="gunsmithPoster"
                alt="gunsmith"
              />
            </td>
            <td class="wiki_link">
              <a href="https://en.wikipedia.org/wiki/Gunsmith_Cats">
                <span>Wiki</span>
              </a>
            </td>
          </tr>
          <tr>
            <td class="ranking">9</td>
            <td class="anime_title">El Hazard</td>
            <td class="year">1995</td>
            <td class="synopsis">
              The story focuses on three high school students, Makoto Mizuhara,
              Katsuhiko Jinnai and Nanami Jinnai, and the History teacher
              Masamichi Fujisawa, who are mysteriously transported to the
              fantastical world of El-Hazard. El-Hazard is threatened by a
              possible war between the human nations and the insectoid Bugrom
              tribe.
            </td>
            <td class="image">
              <img
                src="https://m.media-amazon.com/images/M/MV5BZjk2ZjI4YWYtNmU4NC00Y2MxLWExNzgtZGNjMDgyM2Q0MmViXkEyXkFqcGdeQXVyMTA3OTEyODI1._V1_.jpg"
                id="el_hazard"
                alt="hazard_poster"
              />
            </td>
            <td class="wiki_link">
              <a href="https://en.wikipedia.org/wiki/El-Hazard">
                <span>Wiki</span>
              </a>
            </td>
          </tr>
          <tr>
            <td class="ranking">10</td>
            <td class="anime_title">Samurai Champloo</td>
            <td class="year">2004</td>
            <td class="synopsis">
              A young girl named Fuu is working as a waitress in a tea shop when
              she is abused by a band of samurai. She is saved by a mysterious
              rogue named Mugen and a young rōnin named Jin. Mugen attacks Jin
              after he proves to be a worthy opponent. The pair begin fighting
              one another and inadvertently cause the death of Shibui
              Tomonoshina, the magistrate's son. For this crime, they are to be
              executed. With help from Fuu, they are able to escape execution.
              In return, Fuu asks them to travel with her to find "the samurai
              who smells of sunflowers".
            </td>
            <td class="image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGql0JURfe64Co0ceIx8mTP8TVZ6LfPK43LoaUb6lykMiLqgkt"
                id="samuraiPoster"
                alt="samurai_champloo_poster"
              />
            </td>
            <td class="wiki_link">
              <a href="https://en.wikipedia.org/wiki/Samurai_Champloo">
                <span>Wiki</span>
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="footer">
        <table>
          <thead>
            <tr>
              <td colspan="2">
                <span>Developed by: Aií Hernandez with Beck Bartleson</span>
              </td>
            </tr>
            <tr>Contact</tr>
          </thead>
          <tbody>
            <tr>
              <td>Email:</td>
              <td>Social:</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
      
  );
}

export default Learn;
