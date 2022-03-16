function printRecords(recordIds) {
  let thing1 = recordIds
    .map(function (id) {
      return studentRecords.find(function (stud) {
        return stud.id == id;
      });
    })
    .sort(function (el1, el2) {
      if (el1.name > el2.name) {
        return 1;
      } else if (el1.name < el2.name) {
        return -1;
      } else return 0;
    });
  thing1?.forEach(function (element) {
    console.log(
      `${element.name}(${element.id}): ${
        (element.paid && "paid") || (!element.paid && "not paid")
      }`
    );
  });
}

function paidStudentsToEnroll() {
  let paidAndEnrolled = studentRecords.filter(function (element) {
    return currentEnrollment.includes(element.id) || element.paid;
  });
  return paidAndEnrolled.map(function (x) {
    return x.id;
  });
}

function remindUnpaid(recordIds) {
  let unpaidStuds = studentRecords.filter(function (x) {
    return recordIds.includes(x.id) && x.paid !== true;
  });

  unpaidStuds
    .sort(function (el1, el2) {
      if (el1.name > el2.name) {
        return 1;
      } else if (el1.name < el2.name) {
        return -1;
      } else return 0;
    })
    .forEach(function (element) {
      console.log(
        `${element.name}(${element.id}): ${
          (element.paid && "paid") || (!element.paid && "not paid")
        }`
      );
    });
}

// ********************************

var currentEnrollment = [410, 105, 664, 375];

var studentRecords = [
  { id: 313, name: "Frank", paid: true },
  { id: 410, name: "Suzy", paid: true },
  { id: 709, name: "Brian", paid: false },
  { id: 105, name: "Henry", paid: false },
  { id: 502, name: "Mary", paid: true },
  { id: 664, name: "Bob", paid: false },
  { id: 250, name: "Peter", paid: true },
  { id: 375, name: "Sarah", paid: true },
  { id: 867, name: "Greg", paid: false },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
