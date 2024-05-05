This repository contains various types of test cases. 


# Theoretical Part

MSW => Mock Service worker

It is used to mocking and testing the API => mocking the api means it create a dummy data of api because when we fetch the data
from an api we got some result, might be response is short or larger or may be there is some issue with response. so avoid
this issue msw create a dummy data of response and start testing on it.

Note: react-testing-library is also used msw in their official documentation and they recommend to use MSW


# API testing with MSW process

1. install MSW
2. make mock service folder
3. make server file
4. make server handler file 
5. write code for api testing
6. call server in test setup file
