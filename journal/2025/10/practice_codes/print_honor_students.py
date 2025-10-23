from typing import List


class Student:
    def __init__(
        self, student_id: str, first_name: str, last_name: str, grade_level: int
    ):
        self.student_id = student_id
        self.first_name = first_name
        self.last_name = last_name
        self.grade_level = grade_level

    def get_student_info(self) -> str:
        return f"{self.student_id}: {self.first_name} {self.last_name}({self.grade_level}gr)"


class Classroom:
    def __init__(self, students, course_name: str, teacher: str):
        self.students = students
        self.course_name = course_name
        self.teacher = teacher

    def get_class_identity(self) -> str:
        return f"{self.course_name} managed by {self.teacher}"

    def get_number_of_students(self) -> int:
        return len(self.students)


def print_honor_students(school) -> str:
    for classroom in school:
        for student in classroom.students[: classroom.get_number_of_students()]:
            if student.grade_level >= 10:
                print(f"{student.get_student_info()} from {classroom.teacher}'s class")


classroom1 = Classroom(
    [
        Student("AC-343424", "James", "Smith", 6),
        Student("AC-343428", "Maria", "Garcia", 5),
        Student("AC-343434", "Robert", "Johnson", 3),
        Student("AC-343454", "Danny", "Robertson", 10),
    ],
    "Algebra II",
    "Emily Theodore",
)

classroom2 = Classroom(
    [
        Student("AC-340014", "Kent", "Carter", 9),
        Student("AC-340024", "Isaiah", "Chambers", 10),
        Student("AC-340018", "Leta", "Ferguson", 7),
    ],
    "English",
    "Daniel Pherb",
)

school = [classroom1, classroom2]


print_honor_students(school)
