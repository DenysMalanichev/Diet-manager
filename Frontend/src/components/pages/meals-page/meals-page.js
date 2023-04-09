import {Box, Button, CircularProgress, FormControl, FormHelperText, Input, InputLabel} from "@mui/material";
import testData from "@/components/pages/meals-page/test-data";
import SuggestedDietsCard from "@/components/ui/suggested-diets-card/suggested-diets-card";
import {useRouter} from "next/router";
import {useQuery} from "react-query";
import {API} from "@/pages/api/api";

export default function MealsPage() {

    const router = useRouter();
    const {isLoading, isError, data} = useQuery(
        ['courses'],
        () => API.getMeals(),
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
    return (
        <Box variant='outline' sx={{
            width: '100%', minHeight: '100vh',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '20px',
            padding: '20px',
            flexDirection: 'column',

        }}>
            <Button variant={'outlined'} onClick={()=>{router.push('./main')}} >Go to main</Button>
            {!!data ? (<Box variant='outline' sx={{
                width: '100%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: '20px',
                padding: '20px',
                flexDirection: 'column',
            }}>
                {data.map((diet, index) => (<SuggestedDietsCard mealsInfo={diet}> </SuggestedDietsCard>))}
            < /Box>) : (<CircularProgress/>)}
        < /Box>

    );
};
