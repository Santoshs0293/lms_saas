import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useSearchParams } from "react-router-dom"
const PaymentSuccess = () => {

    const seachQuery = useSearchParams()[0]

    const referenceNum = seachQuery.get("reference")
    return (
        <Box>
            <VStack h="100vh" justifyContent={"center"}>

                <Heading textTransform={"uppercase"}> Your payment was successful</Heading>
 
                   <p> Thank you for your payment. we will <br/>
be in contact with more details shortly </p>     
                <Text>
                    Reference No.{referenceNum}
                </Text>

            </VStack>
        </Box>
    )
}

export default PaymentSuccess