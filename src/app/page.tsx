import Share from "@/components/Share";
import Feed from "@/components/Feed";
import Link from "next/link";
const Homepage = () => {

  return (
    <div className=''>
      <div className="px-4 pt-4 flex justify-between text-textGray font-bold border-b-[1px] ">
        <Link href='/' className="pb-3 flex items-center border-b-4 mr-20 border-iconBlue" >دنبال شده ها</Link>
        <Link href='/' className="pb-3 flex items-center border-b-4 ml-20" >دنبال کننده ها</Link>
      </div>
      <Share/>
      <Feed/>
    </div>
  )
}

export default Homepage;