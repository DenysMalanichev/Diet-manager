import {Box, FormControl, FormHelperText, Input, InputLabel} from "@mui/material";
import testData from "@/components/pages/main-page/test-data";
import SuggestedDietsCard from "@/components/ui/suggested-diets-card/suggested-diets-card";
import {useState} from "react";

export default function MainPage() {
    const data  = testData;
    const [calories, setCalories] = useState('sd');
    return (
        <Box variant='outline' sx={{
            width: '100%', height: '100vh',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '20px',
            padding: '20px',

        }}>
            <FormControl>
                <InputLabel htmlFor="my-input">Calories</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text"
                       onChange={e => {setCalories(e.target.value);}} />
                <FormHelperText id="my-helper-text">Input your calories.</FormHelperText>
            </FormControl>
            <SuggestedDietsCard mealsInfo={data}> </SuggestedDietsCard>
        < /Box>
    );
};
