const objectAssertion = {
  createUser: (): { name: { first: string; last?: string } } => {
    const user: { name: { first: string; last?: string } } = { name: { first: 'hisham' } };
    user.name.last = 'taha';
    return user;
  },
  userNames: (): string[] => ['hisham', 'taha', 'Admin'],

  splitArr: <T>(arr: T[], len: number): T[][] => {
    const result: T[][] = [];
    for (const element of arr) {
      if (!result[result.length - 1] || result[result.length - 1].length >= len) result.push([]);
      result[result.length - 1].push(element);
    }
    return result;
  },
};

export default objectAssertion;
