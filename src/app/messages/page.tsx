'use client'
import Sidebar from '@/components/layout/sidebar/sidebar'
import { useEffect } from 'react'
function Messages() {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap")
      },[])
    return ( 
        <>
        <div className="container">
          <div className="row">
            <Sidebar />
            <div className="col-md-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dicta totam rem praesentium voluptatibus quo consequatur quibusdam obcaecati saepe? Obcaecati aliquid placeat molestias, at minima reprehenderit voluptas, voluptatibus quae natus dolore enim consequuntur! Ut officia, fugit nihil ipsa ducimus aliquam, repudiandae aspernatur pariatur neque consequuntur eius beatae incidunt accusantium tenetur id atque iste voluptatibus molestiae! Possimus temporibus nemo necessitatibus quod eius quas, nisi illum dolorem eligendi, veniam rem labore sit, harum soluta itaque corrupti vel excepturi. Debitis exercitationem maiores in itaque, distinctio hic recusandae explicabo amet doloremque accusamus, laudantium architecto perferendis commodi molestias eligendi sapiente assumenda quo! Odit, hic inventore.
            </div>
            <div className="col-md-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque ad totam nulla eius corporis adipisci, officiis tenetur, repudiandae nesciunt, sint itaque earum consectetur ullam maiores voluptas. Rerum fugit soluta aspernatur ducimus harum quia numquam reiciendis in qui? Reprehenderit autem facilis dolorem nisi. Ut, tenetur magnam! Soluta magni eius reprehenderit id tempore error illo ut porro? Corporis recusandae minima, id dicta veniam saepe sapiente! Consequuntur similique eveniet dicta dignissimos optio fugit consequatur, deserunt, ipsum eum amet reiciendis voluptatibus vitae aperiam sit nobis, veritatis illum ab omnis aspernatur id cupiditate debitis? Corporis, voluptatum. Temporibus cumque dolorem quibusdam cum ipsum ratione dolores ad!
            </div>
           </div>
        </div> 
        </>
     );
}

export default Messages;