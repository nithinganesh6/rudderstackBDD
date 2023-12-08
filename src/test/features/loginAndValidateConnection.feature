Feature: login and verify connection

Scenario: verify connection is established

Given Login to application 
When navigate to Connections page
Then verify  connection exists between source and destination
