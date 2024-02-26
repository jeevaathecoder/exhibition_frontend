import ExhibitorCard from "./exhibitorcard"

export default function Exhibitorhero(){
    return(
        <div className="flex flex-col gap-4 w-full px-32">
            <div className="flex justify-between gap-3 items-end w-full">

                <ExhibitorCard />
                
            </div>
        </div>
    )
}