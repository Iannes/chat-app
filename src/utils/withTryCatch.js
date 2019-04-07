const withTryCatch = async (returnStatement, user) => {
    try {
        await requireAuth(user)
        return returnStatement
  } catch(error) {
        throw error
  }  
}

export default withTryCatch;