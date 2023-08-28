import './Post.css'

export default function Post() {
  return (
    <div className='post' >
        <img 
        className='postImage'
            src='https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
        />
        <div className='postInfo'>
           <div className='postCats'>
               <span className='postCat'>Music</span>
               <span className='postCat'>Life</span>
           </div>
           <span className='postTitle'>
            polio vaccine at the top of bog
           </span>
           <br />
           <span className='postDate'> 1 hour ago </span>
        </div>
        <p className='postDesc'>
        Lorem ipsum dolobcbccbcbcbcbcbcb hdhdhdhd hddhd hdhdhdh bdbbdb bdbdbb.hfhdhhddhdhdh
        hdhhhdhhdh hdhddhdh hdhdhdhdd hdhdhdhh hdhhhdhdh hdhdhdhdhd hhdhdhdhdhd  hdhddhhdhdh
        dhdhdhdh bdbdbdbd bdbdb bd
        Lorem ipsum dolobcbccbcbcbcbcbcb hdhdhdhd hddhd hdhdhdh bdbbdb bdbdbb.hfhdhhddhdhdh
        hdhhhdhhdh hdhddhdh hdhdhdhdd hdhdhdhh hdhhhdhdh hdhdhdhdhd hhdhdhdhdhd  hdhddhhdhdh
        dhdhdhdh bdbdbdbd bdbdb bd
        Lorem ipsum dolobcbccbcbcbcbcbcb hdhdhdhd hddhd hdhdhdh bdbbdb bdbdbb.hfhdhhddhdhdh
        hdhhhdhhdh hdhddhdh hdhdhdhdd hdhdhdhh hdhhhdhdh hdhdhdhdhd hhdhdhdhdhd  hdhddhhdhdh
        dhdhdhdh bdbdbdbd bdbdb bd
        </p>
    </div>
  )
}
