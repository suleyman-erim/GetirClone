/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
export default function MobileApp(){
   return(
    <div className=" bg-primary-brand-color flex justify-between items-center bg-mobile-app mt-7 mb-7 rounded-lg text-white">
        <div className="flex flex-col gap-y-3 p-10 ">
            <h3 className=" text-2xl font-bold tracking-tight">
            Getir'i indirin!
            </h3>
            <p className=" font-semibold ">İstediğiniz ürünleri dakikalar içinde kapınıza <br></br> getirelim.</p>
            <nav className=" mt-5 flex gap-x-2">
            <a href="#">
                <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"></img>
            </a>
            <a href="#">
                <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"></img>
            </a>
            <a href="#">
                <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"></img>
            </a>
        </nav>
        </div>
        <picture className="">
            <img src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png"></img>
        </picture>
       
    </div> 
    )
}
 