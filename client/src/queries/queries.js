import { gql } from "apollo-boost";

const getUniversitiesQuery = gql`
  {
    universities {
      id
      name
      acronym
      ownership
      location
      address
      schoolWebsite
    }
  }
`;

const addUniversityMutation = gql`
  mutation addUniversityMutation(
    $name: String!
    $acronym: String!
    $ownership: String!
    $location: String!
    $address: String!
    $schoolWebsite: String!
  ) {
    addUniversity(
      name: $name
      acronym: $acronym
      ownership: $ownership
      location: $location
      address: $address
      schoolWebsite: $schoolWebsite
    ) {
      name
      acronym
    }
  }
`;

const removeUniversity = gql`
  mutation removeUniversity($acronym: String!) {
    removeUniversity(acronym: $acronym) {
      name
      acronym
    }
  }
`;

const getUniversityQuery = gql`
  query($acronym: String) {
    university(acronym: $acronym) {
      name
      acronym
      ownership
      location
      address
      schoolWebsite
    }
  }
`;

export {
  getUniversitiesQuery,
  addUniversityMutation,
  getUniversityQuery,
  removeUniversity
};
