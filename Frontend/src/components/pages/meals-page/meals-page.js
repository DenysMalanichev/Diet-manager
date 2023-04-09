import {Box, FormControl, FormHelperText, Input, InputLabel} from "@mui/material";
import testData from "@/components/pages/meals-page/test-data";
import SuggestedDietsCard from "@/components/ui/suggested-diets-card/suggested-diets-card";

export default function MealsPage() {
    const data  = testData;
    return (
        <Box variant='outline' sx={{
            width: '100%', height: '100vh',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '20px',
            padding: '20px',
            flexDirection: 'column',

        }}>
            {data.diets.map((diet, index) => (<SuggestedDietsCard mealsInfo={diet}> </SuggestedDietsCard>))}

        < /Box>
    );
};
