// import * as ES from 'elasticsearch';
import { Client } from 'elasticsearch';

const esClient = new Client({ host: 'localhost:9200', log: 'trace' });
// console.log('esClient', esClient);
// const events =
esClient.search(
    {
        index: 'eva-eventss',
        type: '_doc',
        body: {
            // query: {
            //     term: {
            //         status: {
            //             value: 'LIVE',
            //         },
            //     },
            // },
            query: {
                bool: {
                    must: [
                        {
                            match: {
                                status: 'LIVE',
                            },
                        },
                    ],
                    should: [
                        {
                            term: {
                                owner: {
                                    boost: 3,
                                    value: 8,
                                },
                            },
                        },
                        {
                            term: {
                                owner: {
                                    boost: 2.9,
                                    value: 9,
                                },
                            },
                        },
                    ],
                    minimum_should_match: 1,
                    must_not: [
                        {
                            ids: {
                                values: [52],
                            },
                        },
                    ],
                },
            },
        },
    },
    (err, data) => {
        console.log({ err, data });
    }
);
// console.log('events', events);
// console.log(Object.keys(ES));
