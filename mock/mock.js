import Mock from 'mockjs';

let Random = Mock.Random;

Mock.mock('/operation-platform/accountInfo', {"accountInfos|1-10":[{
    'accountCode|1-100': 3,
    'accountName': '@cname',
    'email': '@email',
    'mobilePhone|10-20.2-5': 11,
    'accountType|10-20.3': 11,
    'accountPw|3.2-5': 52,
    'statusId|2-4': 'alice-',
    'accountQuestion|2-4': 'alice-'
}]});

 