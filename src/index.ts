import { APIGatewayEvent } from 'aws-lambda';

export const handler = async (event: APIGatewayEvent): Promise<any> => {
    const mesaj = {
        mesaj: "the first lambda typescript code"
    }
    return {
        statusCode: 200,
        body: JSON.stringify(mesaj)
    }
}