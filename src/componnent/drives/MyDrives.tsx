// import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "../../Store";
// import useGet from "../../hooks/Get";
// import { HTTP } from "../../HTTPpage.contents";

// export const useAppDispatch = () => useDispatch<AppDispatch>()
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const MyDrives = ()=>{

//     // const { res, axiosData } = useGet('HTTP.DRIVERURL'+  `/getMyDriver${/id}`);
//     // const { res, axiosData } = useGet(`${HTTP.DRIVEURL}/getMyDriver/6644bc35072c9bce7ac7500e`);
//     const { res, axiosData } = useGet('http://localhost:8787/drive/getMyDriver');
//     const dispatch = useDispatch();
//     // axiosData({'6644bc35072c9bce7ac7500e'});
//     // const drivers = useAppSelector((driver) => driver.DriverSlice.drivers);

//     console.log("dresrivers", res);

    

    return(
        <>
        {/* {
            res.map((d)=>{
                < props={d}/>
            })
        } */}
        <p>קומפוננטת ניסעה של אפרת</p></>
    )
}
export default MyDrives