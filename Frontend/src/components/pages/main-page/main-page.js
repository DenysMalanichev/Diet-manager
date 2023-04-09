import {Box, Button, CircularProgress, FormControl, FormHelperText, Input, InputLabel} from "@mui/material";
import testData from "@/components/pages/main-page/test-data";
import SuggestedDietsCard from "@/components/ui/suggested-diets-card/suggested-diets-card";
import {useState} from "react";
import {useRouter} from "next/router";
import {useQuery} from "react-query";
import {API} from "@/pages/api/api";

export default function MainPage() {
    const router = useRouter();
    const {isLoading, isError, data} = useQuery(
        ['courses'],
        () => API.getMeal(calories),
        {
            refetchOnWindowFocus: false,
            retry: false
        },
    );
    if (isError) {
        setTimeout(() => {
            void router.push('/');
        }, 3000);
    }

    const [calories, setCalories] = useState(2000);
    return (
        <Box variant='outline' sx={{
            width: '100%', height: '100vh',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '20px',
            padding: '20px',
            flexDirection: 'column',

        }}>
            <Button variant={'outlined'} onClick={()=>{router.push('./meals')}} >Go to all meals</Button>
            <FormControl>
                <InputLabel htmlFor="my-input">Calories</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text"
                       onChange={e => {
                           setCalories(e.target.value);
                       }}/>
                <FormHelperText id="my-helper-text">Input your calories.</FormHelperText>
            </FormControl>
            {data ? (<SuggestedDietsCard mealsInfo={data}> </SuggestedDietsCard>) :
                (<CircularProgress/>)}        < /Box>
    );
};
