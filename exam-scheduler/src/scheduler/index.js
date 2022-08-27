const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

module.exports.getBranch = async (event) => {
  const params = {
    TableName: process.env.SCHEDULER_TABLE,
    Key: {
      PK: "lookup_branch",
      SK: "branch",
    },
  };
  try {
    const { Item } = await docClient.get(params).promise();
    if (Item) {
      const { branchNames } = Item;
      return { branchNames };
    } else {
      const err = "Not able to get data";
      return err;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports.getDepartment = async (event) => {
  const params = {
    TableName: process.env.SCHEDULER_TABLE,
    Key: {
      PK: "lookup_department",
      SK: `branch#${event.queryStringParameters.branch}`,
    },
  };
  try {
    const { Item } = await docClient.get(params).promise();
    if (Item) {
      const { departmentNames } = Item;
      return { departmentNames };
    } else {
      const err = "Not able to get data";
      return err;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports.getExamType = async (event) => {
  const params = {
    TableName: process.env.SCHEDULER_TABLE,
    Key: {
      PK: "lookup_examType",
      SK: "examType",
    },
  };
  try {
    const { Item } = await docClient.get(params).promise();
    if (Item) {
      const { examNames } = Item;
      return { examNames };
    } else {
      const err = "Not able to get data";
      return err;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports.getSubject = async (event) => {
  const params = {
    TableName: process.env.SCHEDULER_TABLE,
    Key: {
      PK: "lookup_subject_lab",
      SK: `${event.queryStringParameters.department}#${parseInt(
        event.queryStringParameters.semester
      )}`,
    },
  };
  try {
    const { Item } = await docClient.get(params).promise();

    if (Item) {
      return { Item };
    } else {
      const err = "Not able to get data";
      return err;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports.postSchedule = async (event) => {
  const body = JSON.parse(event.body);
  const params = {
    TableName: process.env.SCHEDULER_TABLE,
    Item: {
      branch: body.branch,
      department: body.department,
      semester: body.semester,
      examType: body.examType,
      startTimeRange: body.startTimeRange,
      endTimeRange: body.endTimeRange,
      PK: `examType#${body.examType}`,
      SK: `department#${body.department}#${body.semester}`,
      subjects: {
        subject1: {
          subjectCode: body.subjectCode,
          subjectName: body.subjectName,
          subjectDate: body.subjectDate,
          subjectsession: body.subjectSession,
        },
      },
      labs: {
        lab1: {
          labCode: body.subjectCode,
          labName: body.subjectName,
          subjectDate: body.subjectDate,
        },
      },
    },
  };
  try {
    await docClient.put(params).promise();
    return "New schedule added";
  } catch (err) {
    return err;
  }
};

module.exports.getSubjectSchedule = async (event) => {
  const params = {
    TableName: process.env.SCHEDULER_TABLE,
    Key: {
      PK: `examType#${event.queryStringParameters.examType}`,
      SK: `department#${event.queryStringParameters.department}#${event.queryStringParameters.semester}`,
    },
  };
  try {
    const { Item } = await docClient.get(params).promise();
    if (Item) {
      const { subjects, session } = Item;
      return { subjects, session };
    } else {
      const err = "Not able to get data";
      return err;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports.getLabSchedule = async (event) => {
  const params = {
    TableName: process.env.SCHEDULER_TABLE,
    Key: {
      PK: `examType#${event.queryStringParameters.examType}`,
      SK: `department#${event.queryStringParameters.department}#${event.queryStringParameters.semester}`,
    },
  };
  try {
    const { Item } = await docClient.get(params).promise();
    if (Item) {
      const { labs, session } = Item;
      return { labs, session };
    } else {
      const err = "Not able to get data";
      return err;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports.deleteSchedule = async (event) => {
  const params = {
    TableName: process.env.SCHEDULER_TABLE,
    Key: {
      PK: `examType#${event.queryStringParameters.examType}`,
      SK: `department#${event.queryStringParameters.department}#${event.queryStringParameters.semester}`,
    },
  };
  try {
    await docClient.delete(params).promise();
    return "Exam schedule deleted successfully";
  } catch (error) {
    console.log(error);
    return error;
  }
};
